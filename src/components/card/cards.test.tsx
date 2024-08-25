import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Card } from './'
import { CardProps } from './card.types'
import { ATTACK_STAT, DEFENSE_STAT, HEALTH_STAT } from './card.constants'

describe('Card Component', () => {
  const mockProps: CardProps = {
    id: 'card1',
    image: { src: 'image-url.jpg', alt: 'test image' },
    onRemove: vi.fn(),
    handleDecrementStat: vi.fn(),
    handleIncrementStat: vi.fn(),
    stats: {
      health: 100,
      attack: 50,
      defense: 30,
    },
  }

  it('renders correctly with given props', () => {
    render(<Card {...mockProps} />)

    const imageElement = screen.getByAltText(/test image/i)
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', 'image-url.jpg')

    const removeButton = screen.getByRole('button', { name: /x/i })
    expect(removeButton).toBeInTheDocument()

    expect(screen.getByText(HEALTH_STAT.name)).toBeInTheDocument()
    expect(screen.getByText(ATTACK_STAT.name)).toBeInTheDocument()
    expect(screen.getByText(DEFENSE_STAT.name)).toBeInTheDocument()
  })

  it('calls onRemove when remove button is clicked', () => {
    render(<Card {...mockProps} />)

    const removeButton = screen.getByRole('button', { name: /x/i })
    fireEvent.click(removeButton)
    expect(mockProps.onRemove).toHaveBeenCalledTimes(1)
    expect(mockProps.onRemove).toHaveBeenCalledWith('card1')
  })

  it('calls handleIncrement and handleDecrement when Stat buttons are clicked', () => {
    render(<Card {...mockProps} />)

    const incrementHealthButton = screen.getAllByRole('button', {
      name: /increment--button/i,
    })
    const decrementHealthButton = screen.getAllByRole('button', {
      name: /decrement--button/i,
    })

    fireEvent.click(incrementHealthButton[0])
    expect(mockProps.handleIncrementStat).toHaveBeenCalledTimes(1)
    expect(mockProps.handleIncrementStat).toHaveBeenCalledWith(
      'card1',
      HEALTH_STAT.id
    )

    fireEvent.click(decrementHealthButton[0])
    expect(mockProps.handleDecrementStat).toHaveBeenCalledTimes(1)
    expect(mockProps.handleDecrementStat).toHaveBeenCalledWith(
      'card1',
      HEALTH_STAT.id
    )
  })
})
