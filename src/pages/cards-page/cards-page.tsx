import { useState } from 'react'
import { CardGrid } from '../../components/card-grid'
import { GlobalActionButton } from '../../components/global-action-button'
import './cards-page.styles.scss'
import { getNewChar } from './cards-page.utils'
import { CardElement } from '../../components/card/card'

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
          <CardGrid cards={cards} onRemoveCard={removeCharacter} />
        </div>
      </div>
    </div>
  )
}
