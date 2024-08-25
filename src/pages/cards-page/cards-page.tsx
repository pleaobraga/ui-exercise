import { useState } from 'react'

import { getNewChar } from './cards-page.utils'
import { CardGrid } from './components/card-grid'
import { GlobalActionButton } from '../../components/global-action-button'
import { Stats, CardElement } from '../../components/card'

import './cards-page.styles.scss'

export function CardsPage() {
  const [cards, setCards] = useState<Array<CardElement>>([])
  const [cardID, setCardID] = useState(0)

  function addNewCharacter() {
    const newCharacter = getNewChar(cardID)

    setCards((prev) => [...prev, newCharacter])
    setCardID((prev) => prev + 1)
  }

  function attackAllCards() {
    setCards((prev) =>
      prev.map((item) => {
        return {
          ...item,
          stats: {
            ...item.stats,
            health: 0,
          },
        }
      })
    )
  }

  function removeCharacter(id: string) {
    setCards((prev) => prev.filter((prev) => prev.id !== id))
  }

  const handleIncrementStat = (id: string, property: keyof Stats) => {
    setCards((prev) => {
      const itemIndex = prev.findIndex((item) => item.id === id)

      if (itemIndex < 0) {
        return prev
      }

      prev[itemIndex].stats[property] += 1

      return [...prev]
    })
  }

  const handleDecrementStat = (id: string, property: keyof Stats) => {
    setCards((prev) => {
      const itemIndex = prev.findIndex((item) => item.id === id)

      if (itemIndex < 0) {
        return prev
      }

      prev[itemIndex].stats[property] -= 1

      return [...prev]
    })
  }

  return (
    <div className="cards-page">
      <div className="cards-page__content-container">
        <div className="cards-page__action-section">
          <GlobalActionButton text="Add Character" onClick={addNewCharacter} />
          <GlobalActionButton
            text="Attack All Cards"
            onClick={attackAllCards}
          />
        </div>
        <div>
          <CardGrid
            cards={cards}
            onRemoveCard={removeCharacter}
            onDecrementStat={handleDecrementStat}
            onIncrementStat={handleIncrementStat}
          />
        </div>
      </div>
    </div>
  )
}
