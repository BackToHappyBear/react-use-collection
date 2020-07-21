import { storiesOf } from '@storybook/react'
import React from 'react'
import { useInViewport } from '../index'
import ShowDocs from '../../utils/ShowDocs'

const info = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  fontsize: 20,
  fontweight: 'blod',
}

const Demo = () => {
  const [setRef, inViewPort] = useInViewport({ threshold: 0.5 })

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          height: 200,
          textAlign: 'center',
          paddingTop: 10,
          fontSize: 20,
          color: '#fff'
        }}
      >
        {inViewPort ? 'visible' : 'hidden'}
      </div>
      <div style={{ backgroundColor: 'skyblue', ...info }}>scroll down↓</div>
      <div ref={setRef} style={{ backgroundColor: 'yellowgreen', height: 100 }}>
        observer dom
      </div>
      <div style={{ backgroundColor: 'hotpink', ...info }}>scroll up↑</div>
    </>
  )
}

storiesOf('ANIMATION|useInViewport', module)
  .add('Docs', () => <ShowDocs md={require('./index.md')} />)
  .add('Demo', () => <Demo />)
