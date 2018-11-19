# [ReactIsCapsLockActive](https://mattiassundling.github.io/react-is-caps-lock-active/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mattiassundling/react-is-caps-lock-active/blob/master/LICENSE) [![Build Status](https://travis-ci.org/mattiassundling/react-is-caps-lock-active.svg?branch=master)](https://travis-ci.org/mattiassundling/react-is-caps-lock-active)

ReactIsCapsLockActive is a lightweight and easy to use React component that tracks whether or not Caps lock is active. A typical usecase would be to inform a user who is typing their password if Caps lock is active. The state of Caps lock is provided to the consumer as an argument by function as a child. The argument is a boolean which will be true when Caps lock is active and false when Caps lock not active.

## Demo

[Check out the demo!](https://mattiassundling.github.io/react-is-caps-lock-active/)

## Usage

First, install the component

```sh
$ yarn add @matsun/reactiscapslockactive
```

Once done, using the component is as simple as this

```jsx
import React from 'react'
import ReactIsCapsLockActive from '@matsun/reactiscapslockactive'

const MyApp = () => (
  <div>
    <h1>Active or inactive</h1>
    <ReactIsCapsLockActive>
      {active => <span>Caps lock is {active ? 'active' : 'inactive'}</span>}
    </ReactIsCapsLockActive>
  <div>
)
```
