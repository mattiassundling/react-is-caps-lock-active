import React from 'react'
import PropTypes from 'prop-types'

const EVENT_KEY_DOWN = 'keydown'
const EVENT_KEY_UP = 'keyup'

class ReactIsCapsLockActive extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  state = {
    isCapsLockActive: false,
  }

  componentDidMount() {
    document.addEventListener(EVENT_KEY_DOWN, this.wasCapsLockActivated)
    document.addEventListener(EVENT_KEY_UP, this.wasCapsLockDeactivated)
  }

  componentWillUnmount() {
    document.removeEventListener(EVENT_KEY_DOWN, this.wasCapsLockActivated)
    document.removeEventListener(EVENT_KEY_UP, this.wasCapsLockDeactivated)
  }

  wasCapsLockActivated = event => {
    if (
      event.getModifierState &&
      event.getModifierState('CapsLock') &&
      this.state.isCapsLockActive === false
    ) {
      this.setState({ isCapsLockActive: true })
    }
  }

  wasCapsLockDeactivated = event => {
    if (
      event.getModifierState &&
      !event.getModifierState('CapsLock') &&
      this.state.isCapsLockActive === true
    ) {
      this.setState({ isCapsLockActive: false })
    }
  }

  render() {
    return this.props.children(this.state.isCapsLockActive)
  }
}

export default ReactIsCapsLockActive
