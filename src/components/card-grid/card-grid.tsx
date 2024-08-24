import { Card, CardProps } from '../card'
import './card-grid.styles.scss'

export interface CardGridProps {
  cards: Omit<CardProps, 'onRemove'>[]
  onRemoveCard: (id: string) => void
}

export function CardGrid({ cards = [], onRemoveCard }: CardGridProps) {
  if (!cards.length) {
    return (
      <div className="card-grid card-grid__empty">
        <span>There's no cards to show</span>
      </div>
    )
  }

  return (
    <div className="card-grid card-grid__grid">
      {cards.map(({ attack, defense, health, id, image }) => {
        return (
          <Card
            key={id}
            id={id}
            attack={attack}
            defense={defense}
            health={health}
            image={image}
            onRemove={onRemoveCard}
          />
        )
      })}
    </div>
  )
}
