/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback, useRef } from 'react'
import { observe, unobserve } from './intersection'
import { IntersectionOptions, InViewportHookResponse } from './index'

type State = {
  inView: boolean
  entry?: IntersectionObserverEntry
}

const initialState: State = {
  inView: false,
  entry: undefined,
}

export function useInViewport(options: IntersectionOptions = {}): InViewportHookResponse {
  const ref = useRef<Element>()
  const [state, setState] = useState<State>(initialState)

  const setRef = useCallback(
    (node) => {
      if (ref.current) {
        unobserve(ref.current)
      }

      if (node) {
        observe(
          node,
          (inView, intersection) => {
            setState({ inView, entry: intersection })

            if (inView && options.triggerOnce) {
              unobserve(node)
            }
          },
          options
        )
      }

      ref.current = node
    },
    [options.threshold, options.root, options.rootMargin, options.triggerOnce]
  )

  useEffect(() => {
    if (!ref.current && state !== initialState && !options.triggerOnce) {
      setState(initialState)
    }
  })

  return [setRef, state.inView, state.entry]
}
