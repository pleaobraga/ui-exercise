import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Stat } from './'

describe('Stat Component', () => {
  it('renders correctly with given props', () => {
    const name = 'Health'
    const value = 100
    const onIncrement = vi.fn()
    const onDecrement = vi.fn()

    render(
      <Stat
        name={name}
        value={value}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    )

    expect(screen.getByText(name)).toBeInTheDocument()
    expect(screen.getByText(value.toString())).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /decrement--button/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /increment--button/i })
    ).toBeInTheDocument()
  })

  it('calls onIncrement when increment button is clicked', () => {
    const onIncrement = vi.fn()
    const onDecrement = vi.fn()

    render(
      <Stat
        name="Health"
        value={100}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    )

    const incrementButton = screen.getByRole('button', {
      name: /increment--button/i,
    })

    fireEvent.click(incrementButton)
    expect(onIncrement).toHaveBeenCalledTimes(1)
  })

  it('calls onDecrement when decrement button is clicked', () => {
    const onIncrement = vi.fn()
    const onDecrement = vi.fn()

    render(
      <Stat
        name="Health"
        value={100}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    )

    const decrementButton = screen.getByRole('button', {
      name: /decrement--button/i,
    })

    fireEvent.click(decrementButton)
    expect(onDecrement).toHaveBeenCalledTimes(1)
  })
})
