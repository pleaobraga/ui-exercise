import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { CardGrid } from './'
import { CardElement } from '../../../../components/card'

describe('CardGrid Component', () => {
  const mockCard: CardElement = {
    id: 'card1',
    image: { src: 'image-url.jpg', alt: 'test image' },
    stats: {
      health: 100,
      attack: 50,
      defense: 30,
    },
  }

  const mockProps = {
    cards: [mockCard],
    onRemoveCard: vi.fn(),
    onDecrementStat: vi.fn(),
    onIncrementStat: vi.fn(),
  }

  it('renders empty state when there are no cards', () => {
    render(
      <CardGrid
        cards={[]}
        onRemoveCard={mockProps.onRemoveCard}
        onDecrementStat={mockProps.onDecrementStat}
        onIncrementStat={mockProps.onIncrementStat}
      />
    )

    expect(screen.getByText("There's no card to show")).toBeInTheDocument()
  })

  it('renders a grid of cards when cards are provided', () => {
    render(<CardGrid {...mockProps} />)

    expect(screen.getByAltText(/test image/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /x/i })).toBeInTheDocument()
  })
})
