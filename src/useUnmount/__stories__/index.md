## `useUnmount`

React lifecycle hook simulate componentWillUnmount

### Usage

```jsx
const Demo = () => {
  useUnmount(() => alert('unmount'))

  return (
    <div>
      <code>useUnmount()</code> will exec when component unmount.
    </div>
  )
}
```

### Reference

```ts
useUnmount(fn: () => void)
```