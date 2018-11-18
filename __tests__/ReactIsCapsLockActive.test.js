import 'jest-dom/extend-expect'
import React from 'react'
import { cleanup, fireEvent, render } from 'react-testing-library'
import ReactIsCapsLockActive from '../src/ReactIsCapsLockActive'

const PressCapsLock = () => ({
  key: 'CapsLock',
  keyCode: 'CapsLock',
  modifierCapsLock: true,
})

const ReleaseCapsLock = () => ({
  key: 'CapsLock',
  keyCode: 'CapsLock',
  modifierCapsLock: false,
})

afterAll(cleanup)

const renderCount = (() => {
  let rendered = 0

  return () => {
    return ++rendered
  }
})()

const DATA_TEST_ID_CAPS_LOCK_STATE = 'caps-lock-state'
const DATA_TEST_ID_RENDER_COUNT = 'render-count'

const { container, getByTestId } = render(
  <ReactIsCapsLockActive>
    {active =>
      <div>
        <span data-testid={DATA_TEST_ID_CAPS_LOCK_STATE}>Caps lock is {active ? 'active' : 'not active'}</span>
        <span data-testid={DATA_TEST_ID_RENDER_COUNT}>{renderCount()}</span>
      </div>
    }
  </ReactIsCapsLockActive>
)

const expectCapsLockStateToHaveText = text =>
  expect(getByTestId(DATA_TEST_ID_CAPS_LOCK_STATE)).toHaveTextContent(text)

const expectRenderCountToHaveText = text =>
  expect(getByTestId(DATA_TEST_ID_RENDER_COUNT)).toHaveTextContent(text)

it('renders without crashing', () => {
  expectCapsLockStateToHaveText('Caps lock is not active')
  expectRenderCountToHaveText('1')
})

it('should render correctly when toggling caps lock', () => {
  fireEvent.keyDown(container, PressCapsLock())
  expectCapsLockStateToHaveText('Caps lock is active')
  expectRenderCountToHaveText('2')

  fireEvent.keyUp(container, ReleaseCapsLock())
  expectCapsLockStateToHaveText('Caps lock is not active')
  expectRenderCountToHaveText('3')
})

it('it should not rerender unless caps lock has changed', () => {
  fireEvent.keyUp(container, ReleaseCapsLock())
  expectCapsLockStateToHaveText('Caps lock is not active')
  expectRenderCountToHaveText('3')

  fireEvent.keyUp(container, ReleaseCapsLock())
  expectCapsLockStateToHaveText('Caps lock is not active')
  expectRenderCountToHaveText('3')

  fireEvent.keyUp(container, ReleaseCapsLock())
  expectCapsLockStateToHaveText('Caps lock is not active')
  expectRenderCountToHaveText('3')
})
