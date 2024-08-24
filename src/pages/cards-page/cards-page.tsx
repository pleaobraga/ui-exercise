import { useState } from 'react'
import { CardGrid } from '../../components/card-grid'
import { GlobalActionButton } from '../../components/global-action-button'
import './cards-page.styles.scss'
import { getNewChar } from './cards-page.utils'
import { Attributes, CardElement } from '../../components/card'

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
          health: 0,
        }
      })
    )
  }

  function removeCharacter(id: string) {
    setCards((prev) => prev.filter((prev) => prev.id !== id))
  }

  const handleIncrement = (id: string, property: keyof Attributes) => {
    setCards((prev) => {
      const itemIndex = prev.findIndex((item) => item.id === id)

      if (itemIndex < 0) {
        return prev
      }

      prev[itemIndex].attributes[property] += 1

      return [...prev]
    })
  }

  const handleDecrement = (id: string, property: keyof Attributes) => {
    setCards((prev) => {
      const itemIndex = prev.findIndex((item) => item.id === id)

      if (itemIndex < 0) {
        return prev
      }

      prev[itemIndex].attributes[property] -= 1

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
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
          />
        </div>
      </div>
    </div>
  )
}
