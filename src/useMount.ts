import { useRef, useEffect } from 'react'

export const useMount = (fn: () => void) => {
  const ref = useRef(fn)
  ref.current = fn

  useEffect(() => {
    ref.current()
  }, [])
}
