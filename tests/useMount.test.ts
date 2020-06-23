import { renderHook } from '@testing-library/react-hooks'
import { useMount } from '../src'

describe('useMount', () => {
  it('should be defined', () => {
    expect(useMount).toBeDefined()
  })

  it('test mount', async () => {
    const spy = jest.fn()
    const hook = renderHook(() => useMount(spy))
    expect(spy).toBeCalledTimes(1)

    hook.rerender()
    expect(spy).toBeCalledTimes(1)

    hook.unmount()
    expect(spy).toBeCalledTimes(1)
  })
})
