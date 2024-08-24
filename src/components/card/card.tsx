import './card.styles.scss'
import { Stat } from './components/stat'
import { ATTACK_STAT, DEFENSE_STAT, HEALTH_STAT } from './card.constants'

export interface CardElement {
  id: string
  health: number
  attack: number
  defense: number
  image: {
    src: string
    alt?: string
    dimensions: {
      width: number
      height: number
    }
  }
}

export interface CardProps extends CardElement {
  onRemove: (id: string) => void
}

export function Card({ id, image, onRemove, ...props }: CardProps) {
  // const handleIncrement = (id: keyof typeof statsValue) => {
  //   setStatsValue((prev) => ({ ...prev, [id]: prev[id] + 1 }))
  // }

  // const handleDecrement = (id: keyof typeof statsValue) => {
  //   setStatsValue((prev) => ({ ...prev, [id]: prev[id] - 1 }))
  // }

  const handleIncrement = (id: string) => {
    console.log(id)
  }

  const handleDecrement = (id: string) => {
    console.log(id)
  }

  return (
    <div className="card">
      <button className="card__remove" onClick={() => onRemove(id)}>
        X
      </button>
      <div>
        <img
          src={image.src}
          alt={image?.alt ?? 'card image'}
          height={image.dimensions.height}
          width={image.dimensions.width}
        />
      </div>
      <div className="card__content">
        <Stat
          key={HEALTH_STAT.id}
          name={HEALTH_STAT.name}
          value={props.attack}
          onDecrement={() => handleDecrement(id)}
          onIncrement={() => handleIncrement(id)}
        />
        <Stat
          key={ATTACK_STAT.id}
          name={ATTACK_STAT.name}
          value={props.attack}
          onDecrement={() => handleDecrement(id)}
          onIncrement={() => handleIncrement(id)}
        />
        <Stat
          key={DEFENSE_STAT.id}
          name={DEFENSE_STAT.name}
          value={props.defense}
          onDecrement={() => handleDecrement(id)}
          onIncrement={() => handleIncrement(id)}
        />
      </div>
    </div>
  )
}
