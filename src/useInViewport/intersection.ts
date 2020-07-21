import invariant from 'tiny-invariant'
import { ObserverInstanceCallback, ObserverInstance } from './index'

const INSTANCE_MAP: Map<Element, ObserverInstance> = new Map()
const OBSERVER_MAP: Map<string, IntersectionObserver> = new Map()
const ROOT_IDS: Map<Element, string> = new Map()

let consecutiveRootIds = 0

function getRootId(root?: Element | null) {
  if (!root) return ''
  if (ROOT_IDS.has(root)) return ROOT_IDS.get(root)
  consecutiveRootIds += 1
  ROOT_IDS.set(root, consecutiveRootIds.toString())
  return ROOT_IDS.get(root) + '_'
}

export function observe(
  element: Element,
  callback: ObserverInstanceCallback,
  options: IntersectionObserverInit = {}
) {
  if (!options.threshold) options.threshold = 0
  const { root, rootMargin, threshold } = options

  invariant(
    !INSTANCE_MAP.has(element),
    "useInViewport: Trying to observe %s, but it's already being observed by another instance.\nMake sure the `ref` is only used by a single <Observer /> instance.\n\n%s"
  )

  if (!element) return

  // 保证在相同 root 下，拿到同一个 intersectionObserver 实例
  let observerId: string =
    getRootId(root) + (rootMargin ? `${threshold.toString()}_${rootMargin}` : threshold.toString())
  let observerInstance = OBSERVER_MAP.get(observerId)

  // 已存在于 OBSERVER_MAP 中的相同的 observerId（即相同的 options） 可直接通过 observerInstance.observe(element) 监听
  if (!observerInstance) {
    observerInstance = new IntersectionObserver(onChange, options)
    if (observerId) OBSERVER_MAP.set(observerId, observerInstance)
  }

  const instance: ObserverInstance = {
    callback,
    element,
    inView: false,
    observerId,
    observer: observerInstance,
    thresholds: observerInstance.thresholds || (Array.isArray(threshold) ? threshold : [threshold]),
  }

  INSTANCE_MAP.set(element, instance)
  observerInstance.observe(element)

  return instance
}

export function unobserve(element: Element | null) {
  if (!element) return
  const instance = INSTANCE_MAP.get(element)

  if (instance) {
    const { observerId, observer } = instance
    const { root } = observer

    observer.unobserve(element)

    // 判断是否
    let itemsLeft = false
    let rootObserved = false

    if (observerId) {
      INSTANCE_MAP.forEach((item, key) => {
        // 排除当前元素
        if (key !== element) {
          //  observerId 相同，即 root rootMargin threshold 相同
          if (item.observerId === observerId) {
            itemsLeft = true
            rootObserved = true
          }

          if (item.observer.root === root) {
            rootObserved = true
          }
        }
      })
    }

    if (!rootObserved && root) ROOT_IDS.delete(root)
    if (observer && !itemsLeft) observer.disconnect()
  }

  INSTANCE_MAP.delete(element)
}

function destroy() {
  OBSERVER_MAP.forEach((observer) => {
    observer.disconnect()
  })

  OBSERVER_MAP.clear()
  INSTANCE_MAP.clear()
  ROOT_IDS.clear()
  consecutiveRootIds = 0
}

function onChange(changes: IntersectionObserverEntry[]) {
  changes.forEach((intersection) => {
    const { isIntersecting, intersectionRatio, target } = intersection
    const instance = INSTANCE_MAP.get(target)

    if (instance && intersectionRatio >= 0) {
      let inView = instance.thresholds.some((threshold) => {
        return instance.inView ? intersectionRatio > threshold : intersectionRatio >= threshold
      })

      if (isIntersecting !== undefined) {
        inView = inView && isIntersecting
      }

      instance.inView = inView
      instance.callback(inView, intersection)
    }
  })
}

export default {
  observe,
  unobserve,
  destroy,
}
