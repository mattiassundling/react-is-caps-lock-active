# [ReactIsCapsLockActive](https://mattiassundling.github.io/react-is-caps-lock-active/)

[![version][version-badge]][package] [![Build Status][build-badge]][build] [![MIT License][license-badge]][LICENSE]

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

## LICENSE

[MIT](LICENSE)

[build-badge]: https://img.shields.io/travis/mattiassundling/react-is-caps-lock-active.svg?style=flat-square
[build]: https://travis-ci.org/mattiassundling/react-is-caps-lock-active
[license-badge]: https://img.shields.io/npm/l/@matsun/reactiscapslockactive.svg?style=flat-square
[license]: https://github.com/mattiassundling/react-is-caps-lock-active/blob/master/LICENSE
[version-badge]: https://img.shields.io/npm/v/@matsun/reactiscapslockactive.svg?style=flat-square
[package]: https://www.npmjs.com/package/@matsun/reactiscapslockactive
