import { Card, CardProps } from '../card'
import './card-grid.styles.scss'

export interface CardGridProps {
  cards: CardProps[]
}

export function CardGrid({ cards = [] }: CardGridProps) {
  if (!cards.length) {
    return (
      <div className="card-grid card-grid__empty">
        <span>There's no cards to show</span>
      </div>
    )
  }

  return (
    <div className="card-grid card-grid__grid">
      {cards.map(({ id, imageDimensions, imageSrc, imageAlt }) => {
        return (
          <Card
            key={id}
            id={id}
            imageDimensions={imageDimensions}
            imageSrc={imageSrc}
            imageAlt={imageAlt}
          />
        )
      })}
    </div>
  )
}
