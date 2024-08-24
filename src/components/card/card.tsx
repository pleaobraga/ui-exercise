import './card.styles.scss'
import { Stat } from './components/stat'
import {
  ATTACK_STAT,
  CARD_STATS,
  DEFENSE_STAT,
  HEALTH_STAT,
} from './card.constants'
import { useState } from 'react'

export function Card() {
  const [statsValue, setStatsValue] = useState({
    [HEALTH_STAT.id]: HEALTH_STAT.defaultValue,
    [ATTACK_STAT.id]: ATTACK_STAT.defaultValue,
    [DEFENSE_STAT.id]: DEFENSE_STAT.defaultValue,
  })

  const hanldeIncrement = (id: keyof typeof statsValue) => {
    setStatsValue((prev) => ({ ...prev, [id]: prev[id] + 1 }))
  }

  const handleDecrement = (id: keyof typeof statsValue) => {
    setStatsValue((prev) => ({ ...prev, [id]: prev[id] - 1 }))
  }

  return (
    <div className="card">
      <div>Image box</div>
      <div className="card__content">
        {CARD_STATS.map(({ name, id }) => (
          <Stat
            key={id}
            name={name}
            value={statsValue[id]}
            onDecrement={() => handleDecrement(id)}
            onIncrement={() => hanldeIncrement(id)}
          />
        ))}
      </div>
    </div>
  )
}
