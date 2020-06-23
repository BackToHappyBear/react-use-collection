import { storiesOf } from '@storybook/react'
import React from 'react'
import { useMount } from '../src'
import ShowDocs from './util/ShowDocs'

const Demo = () => {
  useMount(() => alert('MOUNTED'))

  return null
}

storiesOf('Lifecycle|useMount', module)
  .add('Docs', () => <ShowDocs md={require('../docs/useMount.md')} />)
  .add('Demo', () => <Demo />)
