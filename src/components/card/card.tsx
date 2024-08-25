import './card.styles.scss'
import { Stat } from './components/stat'
import { ATTACK_STAT, DEFENSE_STAT, HEALTH_STAT } from './card.constants'
import { CardProps } from './card.types'

export function Card({
  id,
  image,
  onRemove,
  handleDecrementStat,
  handleIncrementStat,
  ...props
}: CardProps) {
  return (
    <div className="card">
      <button className="card__remove" onClick={() => onRemove(id)}>
        X
      </button>
      <div>
        <img
          className="card__image"
          src={image.src}
          alt={image?.alt ?? 'card image'}
        />
      </div>
      <div className="card__content">
        <Stat
          key={HEALTH_STAT.id}
          name={HEALTH_STAT.name}
          value={props.stats.health}
          onDecrement={() => handleDecrementStat(id, HEALTH_STAT.id)}
          onIncrement={() => handleIncrementStat(id, HEALTH_STAT.id)}
        />
        <Stat
          key={ATTACK_STAT.id}
          name={ATTACK_STAT.name}
          value={props.stats.attack}
          onDecrement={() => handleDecrementStat(id, ATTACK_STAT.id)}
          onIncrement={() => handleIncrementStat(id, ATTACK_STAT.id)}
        />
        <Stat
          key={DEFENSE_STAT.id}
          name={DEFENSE_STAT.name}
          value={props.stats.defense}
          onDecrement={() => handleDecrementStat(id, DEFENSE_STAT.id)}
          onIncrement={() => handleIncrementStat(id, DEFENSE_STAT.id)}
        />
      </div>
    </div>
  )
}
