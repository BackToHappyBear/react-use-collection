import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import { useThrottle } from '../..'
import ShowDocs from '../../util/ShowDocs'

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

storiesOf('Side effects|useThrottle', module)
  .add('Docs', () => <ShowDocs md={require('./index.md')} />)
  .add('Demo', () => <Demo />)
