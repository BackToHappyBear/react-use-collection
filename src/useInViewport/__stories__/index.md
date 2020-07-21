## `useMount`

React lifecycle hook simulate componentDidmount

## Usage

```jsx
import { useInViewport } from 'react-use-collection'

const info = {
  position: 'fixed', top: 0, height: 200
}

const Demo = () => {
  const [setRef, inViewPort] = useInViewport({ threshold: 0.5, triggerOnce: true })

  return (
    <>
      <div style={info}>{inViewPort ? 'visible' : 'hidden'}</div>
      <div style={{ height: '100vh', backgroundColor: '#ccc' }}>scroll down↓</div>
      <div ref={setRef}>observer dom</div>
      <div style={{ height: '100vh', backgroundColor: '#ccc' }}>scroll up↑</div>
    </>
  )
}
```

### Reference

```ts
useInViewport(options: IntersectionOptions = {}): InViewportHookResponse
```
