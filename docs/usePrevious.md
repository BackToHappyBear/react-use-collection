## `usePevious`

React state hook that return previous state

## Usage

```jsx
import { usePrevious } from 'react-use-collection'

const Demo = () => {
  const [count, setCount] = useState(0)
  const prevCount = usePrevious(count)

  return (
    <>
      <p>
        Now: {count}, before: {String(prevCount)}
      </p>
      <button onClick={() => setCount(v => v + 1)}>+</button>
      <button onClick={() => setCount(v => v - 1)}>+</button>
    </>
  )
}
```