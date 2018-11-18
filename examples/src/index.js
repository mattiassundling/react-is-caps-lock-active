import React from 'react'
import { render } from 'react-dom'
import GitHubLogo from './GitHub-Mark-32px.png'
import ReactIsCapsLockActive from '../../src'
import './index.css'

const CapsLockButtonIndicator = ({ active }) => {
  const classNames = ['capsLockButtonIndicator']

  if (active) {
    classNames.push('capsLockButtonIndicatorOn')
  }

  return <span className={classNames.join(' ')} />
}

const CapsLockButtonText = ({ active }) => (
  <span className="capsLockButtonText">
    caps lock is {active ? 'active' : 'inactive'}
  </span>
)

const App = () => (
  <div className="wrapper">
    <div className="mb-20">
      <h1>&lt;ReactIsCapsLockActive &#x2F;&gt;</h1>
    </div>
    <div className="mb-20">
      <div className="capsLockButton">
        <ReactIsCapsLockActive>
          {active => (
            <React.Fragment>
              <CapsLockButtonIndicator active={active} />
              <CapsLockButtonText active={active} />
            </React.Fragment>
          )}
        </ReactIsCapsLockActive>
      </div>
    </div>
    <div className="mb-80">
      <p>A lightweight and easy to use React component that tracks whether Caps lock is active or not</p>
    </div>
    <a href="https://github.com/mattiassundling/react-is-caps-lock-active" className="githubLink">
      <img src={GitHubLogo} />
    </a>
  </div>
)

render(<App />, document.getElementById('root'))
