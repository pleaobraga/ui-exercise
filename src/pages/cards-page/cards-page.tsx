import { useState } from 'react'
import { CardGrid } from '../../components/card-grid'
import { GlobalActionButton } from '../../components/global-action-button'
import './cards-page.styles.scss'
import { getNewChar } from './cards-page.utils'

export function CardsPage() {
  const [cards, setCards] = useState([])

  function addNewCharacter() {
    const newCharacter = getNewChar(cards.length)

    setCards((prev) => [...prev, newCharacter])
  }

  return (
    <div className="cards-page">
      <div className="cards-page__content-container">
        <div className="cards-page__action-section">
          <GlobalActionButton text="Add Character" onClick={addNewCharacter} />
          <GlobalActionButton text="Attack All Characters" />
        </div>
        <div>
          <CardGrid cards={cards} />
        </div>
      </div>
    </div>
  )
}
