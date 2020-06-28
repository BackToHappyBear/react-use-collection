## `useToggle`

React state hook that tracks value of a boolean

## Usage

```jsx
import { useToggle } from 'react-use-collection'

const Demo = () => {
  const [on, toggle] = useToggle(true)

  return (
    <>
      <div>{on ? 'ON' : 'OFF'}</div>
      <button onClick={toggle}>Toggle</button>
      <button onClick={() => toggle(true)}>set ON</button>
      <button onClick={() => toggle(false)}>set OFF</button>
    </>
  )
}
```