import './card.styles.scss'
import { Stat } from './components/stat'
import {
  ATTACK_STATS,
  CARD_STATS,
  DEFENSE_STATS,
  HEALTH_STATS,
} from './card.constants'
import { useState } from 'react'

export function Card() {
  const [statsValue, setStatsValue] = useState({
    [HEALTH_STATS.id]: HEALTH_STATS.defaultValue,
    [ATTACK_STATS.id]: ATTACK_STATS.defaultValue,
    [DEFENSE_STATS.id]: DEFENSE_STATS.defaultValue,
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
