import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect, vi } from 'vitest'
import { StatButton } from './'
import { StatButtonProps } from './stat-button'

describe('StatButton Component', () => {
  const renderComponent = (props: Partial<StatButtonProps> = {}) => {
    const defaultProps: StatButtonProps = {
      kind: 'increment',
      onClick: vi.fn(),
      ...props,
    }

    render(<StatButton {...defaultProps} />)
  }

  it('renders the StatButton with increment kind', () => {
    renderComponent({ kind: 'increment' })

    const buttonElement = screen.getByRole('button', {
      name: /increment--button/i,
    })
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('stat-button--increment')
    expect(buttonElement).toHaveTextContent('+')
  })

  it('renders the StatButton with decrement kind', () => {
    renderComponent({ kind: 'decrement' })

    const buttonElement = screen.getByRole('button', {
      name: /decrement--button/i,
    })
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('stat-button--decrement')
    expect(buttonElement).toHaveTextContent('-')
  })

  it('calls onClick when the button is clicked', () => {
    const onClickMock = vi.fn()
    renderComponent({ kind: 'increment', onClick: onClickMock })

    const buttonElement = screen.getByRole('button', {
      name: /increment--button/i,
    })
    fireEvent.click(buttonElement)

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
