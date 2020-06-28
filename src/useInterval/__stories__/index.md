# `useInterval`

A declarative interval hook based on [Dan Abramov's article on overreacted.io](https://overreacted.io/making-setinterval-declarative-with-react-hooks). The interval can be paused by setting the delay to `null`

## Usage

```jsx
import React, { useState } from 'react'
import { useInterval } from 'react-use-collection'

const Demo = () => {
  const [count, setCount] = useState(0)
  const [delay, setDelay] = useState(1000)
  const [isRunning, setIsRunning] = useState(true)

  useInterval(() => {
    setCount(count + 1)
  }, isRunning ? delay : null)

  return (
    <>
      <div>
        delay: <input value={delay} onChange={event => setDelay(Number(event.target.value))} />
      </div>
      <h1>count: {count}</h1>
      <div>
        <button onClick={setIsRunning}>{isRunning ? 'stop' : 'start'}</button>
      </div>
    </>
  )
}
```

## Reference

```ts
useInterval(callback, delay?: number)
```