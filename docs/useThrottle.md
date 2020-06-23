## `useThrottle`

React hook used for throttle funtion


### Usage

```jsx
import { useThrottle } from 'react-use-collection'

const Demo = () => {
  const [value, setValue] = useState('')
  const throttleValue = useThrottle(value, 500)

  return (
    <div style={{ width: 200, margin: '40px auto' }}>
      <input
        type="text"
        value={value}
        onChange={({ currentTarget }) => {
          setValue(currentTarget.value)
        }}
      />
      <p>Throttle value: {throttleValue}</p>
    </div>
  )
}
```

## Reference

```ts
useThrottle(value, ms?: number)
```