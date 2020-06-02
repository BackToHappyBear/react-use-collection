import { useRef, useEffect } from 'react'

export const useInterval = (callback: Function, delay?: number | null) => {
  const callbackRef = useRef<Function>(() => {})
  useEffect(() => {
    callbackRef.current = callback
  })

  useEffect(() => {
    if (delay !== null) {
      const tId = setInterval(() => callbackRef.current(), delay || 0)
      return () => clearInterval(tId)
    }
    return undefined
  }, [delay])
}
