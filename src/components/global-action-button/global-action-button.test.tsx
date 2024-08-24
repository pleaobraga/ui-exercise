import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { GlobalActionButton } from './'
import { GlobalActionButtonProps } from './global-action-button'

describe('GlobalActionButton Component', () => {
  const renderComponent = (props: Partial<GlobalActionButtonProps> = {}) => {
    const defaultProps: GlobalActionButtonProps = {
      text: 'Click Me',
      onClick: vi.fn(),
      ...props,
    }

    render(<GlobalActionButton {...defaultProps} />)
  }

  it('renders correctly with given text', () => {
    renderComponent({ text: 'Submit' })

    const buttonElement = screen.getByText(/submit/i)
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('global-action-button')
  })

  it('calls onClick when the button is clicked', () => {
    const onClickMock = vi.fn()
    renderComponent({ text: 'Click Me', onClick: onClickMock })

    const buttonElement = screen.getByText(/click me/i)
    fireEvent.click(buttonElement)

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
