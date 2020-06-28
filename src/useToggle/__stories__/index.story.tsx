import { storiesOf } from '@storybook/react'
import React from 'react'
import { useToggle } from '../..'
import ShowDocs from '../../utils/ShowDocs'

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

storiesOf('State|useToggle', module)
  .add('Docs', () => <ShowDocs md={require('./index.md')} />)
  .add('Demo', () => <Demo />)
