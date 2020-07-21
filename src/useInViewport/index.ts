export { useInViewport } from './useInViewport'

export interface IntersectionOptions extends IntersectionObserverInit {
  triggerOnce?: boolean
}

export type InViewportHookResponse = [
  (node?: Element | null) => void,
  boolean,
  IntersectionObserverEntry | undefined
]

export type ObserverInstanceCallback = (inView: boolean, intersection: IntersectionObserverEntry) => void

export type ObserverInstance = {
  inView: boolean
  readonly callback: ObserverInstanceCallback
  readonly element: Element
  readonly observerId: string
  readonly observer: IntersectionObserver
  readonly thresholds: ReadonlyArray<number>
}
