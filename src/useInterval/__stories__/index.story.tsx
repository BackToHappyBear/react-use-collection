import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import { useInterval } from '../../index'
import ShowDocs from '../../util/ShowDocs'

const Demo = () => {
  const [count, setCount] = useState(0)
  const [delay, setDelay] = useState(1000)
  const [isRunning, setIsRunning] = useState(true)

  useInterval(
    () => {
      setCount(count + 1)
    },
    isRunning ? delay : null,
  )

  return (
    <div>
      <div>
        delay:
        <input
          type="text"
          value={delay}
          onChange={(event) => setDelay(Number(event.target.value))}
        />
        <h1>count: {count}</h1>
      </div>
      <div>
        <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? 'stop' : 'start'}</button>
      </div>
    </div>
  )
}

storiesOf('Animation|useInterval', module)
  .add('Docs', () => <ShowDocs md={require('./index.md')} />)
  .add('Demo', () => <Demo />)
