import React from "react";
import PropTypes from "prop-types";

const EVENT_KEY_DOWN = "keydown";
const EVENT_KEY_UP = "keyup";

class ReactIsCapsLockActive extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };

  state = {
    isCapsLockActive: false
  };

  componentDidMount() {
    document.addEventListener(EVENT_KEY_DOWN, this.handleKeyboardEvent);
    document.addEventListener(EVENT_KEY_UP, this.handleKeyboardEvent);
  }

  componentWillUnmount() {
    document.removeEventListener(EVENT_KEY_DOWN, this.handleKeyboardEvent);
    document.removeEventListener(EVENT_KEY_UP, this.handleKeyboardEvent);
  }

  handleKeyboardEvent = event => {
    const { isCapsLockActive } = this.state;

    if (
      event.getModifierState &&
      isCapsLockActive !== event.getModifierState("CapsLock")
    )
      this.setState({ isCapsLockActive: !isCapsLockActive });
  };

  render() {
    return this.props.children(this.state.isCapsLockActive);
  }
}

export default ReactIsCapsLockActive;
