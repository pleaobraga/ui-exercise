import { Stats, Card, CardElement } from '../../../../components/card'
import './card-grid.styles.scss'

export interface CardGridProps {
  cards: CardElement[]
  onRemoveCard: (id: string) => void
  onDecrementStat: (id: string, property: keyof Stats) => void
  onIncrementStat: (id: string, property: keyof Stats) => void
}

export function CardGrid({
  cards = [],
  onRemoveCard,
  onDecrementStat,
  onIncrementStat,
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
      {cards.map(({ stats, id, image }) => {
        return (
          <Card
            key={id}
            id={id}
            stats={stats}
            image={image}
            onRemove={onRemoveCard}
            handleDecrementStat={onDecrementStat}
            handleIncrementStat={onIncrementStat}
          />
        )
      })}
    </div>
  )
}
