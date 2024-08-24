import { Attributes, Card, CardElement } from '../../../../components/card'
import './card-grid.styles.scss'

export interface CardGridProps {
  cards: CardElement[]
  onRemoveCard: (id: string) => void
  onDecrement: (id: string, property: keyof Attributes) => void
  onIncrement: (id: string, property: keyof Attributes) => void
}

export function CardGrid({
  cards = [],
  onRemoveCard,
  onDecrement,
  onIncrement,
}: CardGridProps) {
  if (!cards.length) {
    return (
      <div className="card-grid card-grid__empty">
        <span>There's no card to show</span>
      </div>
    )
  }

  return (
    <div className="card-grid card-grid__grid">
      {cards.map(({ attributes, id, image }) => {
        return (
          <Card
            key={id}
            id={id}
            attributes={attributes}
            image={image}
            onRemove={onRemoveCard}
            handleDecrement={onDecrement}
            handleIncrement={onIncrement}
          />
        )
      })}
    </div>
  )
}
