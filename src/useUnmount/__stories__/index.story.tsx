import { storiesOf } from '@storybook/react'
import React from 'react'
import { useUnmount } from '../..'
import ShowDocs from '../../util/ShowDocs'

const Demo = () => {
  useUnmount(() => alert('unmount'))

  return (
    <div>
      <code>useUnmount()</code> will exec when component unmount.
    </div>
  )
}

storiesOf('Lifecycle|useUnmout', module)
  .add('Docs', () => <ShowDocs md={require('./index.md')} />)
  .add('Demo', () => <Demo />)
