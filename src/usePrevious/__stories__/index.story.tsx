import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import { usePrevious } from '../..'
import ShowDocs from '../../util/ShowDocs'

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

storiesOf('State|usePrevious', module)
  .add('Docs', () => <ShowDocs md={require('./index.md')} />)
  .add('Demo', () => <Demo />)