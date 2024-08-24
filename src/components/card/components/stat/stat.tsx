import { StatButton } from './components/stat-button'
import './stat.styles.scss'

export interface StatProps {
  name: string
  value: number
  onIncrement: () => void
  onDecrement: () => void
}

export function Stat({ name, onDecrement, onIncrement, value }: StatProps) {
  return (
    <div className="stat">
      <div className="stat__placeholder-container">
        <span className="title">{name}</span>
        <span className="value">{value}</span>
      </div>
      <div className="stat__actions-container">
        <StatButton kind="decrement" onClick={onDecrement} />
        <StatButton kind="increment" onClick={onIncrement} />
      </div>
    </div>
  )
}
