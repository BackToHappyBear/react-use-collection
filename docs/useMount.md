## `useMount`

React lifecycle hook simulate componentDidmount

## Usage

```jsx
import { useMount } from 'react-use-collection'

const Demo = () => {
  useMount(() => alert('MOUNTED'))

  return null
}
```

### Reference

```ts
useMount(fn: () => void)
```