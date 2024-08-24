import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { CardsPage } from './'

vi.mock('./cards-page.utils', () => ({
  getNewChar: vi.fn((id) => ({
    id: `character-${id}`,
    image: { src: 'image-url.jpg', alt: 'Character Image' },
    attributes: { health: 100, attack: 50, defense: 30 },
  })),
}))

describe('CardsPage Component', () => {
  it('renders correctly', () => {
    render(<CardsPage />)

    expect(screen.getByText('Add Character')).toBeInTheDocument()
    expect(screen.getByText('Attack All Cards')).toBeInTheDocument()
    expect(screen.getByText("There's no card to show")).toBeInTheDocument()
  })

  it('adds a new character when "Add Character" button is clicked', () => {
    render(<CardsPage />)

    const addButton = screen.getByText('Add Character')
    fireEvent.click(addButton)

    expect(screen.getByAltText('Character Image')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
  })

  it('attacks all cards when "Attack All Cards" button is clicked', () => {
    render(<CardsPage />)

    const addButton = screen.getByText('Add Character')
    fireEvent.click(addButton)

    const attackButton = screen.getByText('Attack All Cards')
    fireEvent.click(attackButton)

    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('removes a character when the remove button is clicked', () => {
    render(<CardsPage />)

    const addButton = screen.getByText('Add Character')
    fireEvent.click(addButton)

    const removeButton = screen.getByRole('button', { name: /x/i })
    fireEvent.click(removeButton)

    expect(screen.queryByAltText('Character Image')).not.toBeInTheDocument()
  })

  it('increments and decrements the character attributes', () => {
    render(<CardsPage />)

    const addButton = screen.getByText('Add Character')
    fireEvent.click(addButton)

    const incrementButton = screen.getAllByRole('button', {
      name: /increment--button/i,
    })
    fireEvent.click(incrementButton[0])
    expect(screen.getByText('101')).toBeInTheDocument()

    const decrementButton = screen.getAllByRole('button', {
      name: /decrement--button/i,
    })
    fireEvent.click(decrementButton[0])
    expect(screen.getByText('100')).toBeInTheDocument()
  })
})
