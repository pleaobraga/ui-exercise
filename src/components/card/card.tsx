import './card.styles.scss'
import { Stat } from './components/stat'
import { ATTACK_STAT, DEFENSE_STAT, HEALTH_STAT } from './card.constants'
import { CardProps } from './card.types'

export function Card({
  id,
  image,
  onRemove,
  handleDecrement,
  handleIncrement,
  ...props
}: CardProps) {
  console.log('props', props)

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
          value={props.attributes.health}
          onDecrement={() => handleDecrement(id, HEALTH_STAT.id)}
          onIncrement={() => handleIncrement(id, HEALTH_STAT.id)}
        />
        <Stat
          key={ATTACK_STAT.id}
          name={ATTACK_STAT.name}
          value={props.attributes.attack}
          onDecrement={() => handleDecrement(id, ATTACK_STAT.id)}
          onIncrement={() => handleIncrement(id, ATTACK_STAT.id)}
        />
        <Stat
          key={DEFENSE_STAT.id}
          name={DEFENSE_STAT.name}
          value={props.attributes.defense}
          onDecrement={() => handleDecrement(id, DEFENSE_STAT.id)}
          onIncrement={() => handleIncrement(id, DEFENSE_STAT.id)}
        />
      </div>
    </div>
  )
}
