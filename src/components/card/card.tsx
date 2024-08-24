import './card.styles.scss'
import { Stat } from './components/stat'

export function Card() {
  return (
    <div className="card">
      <div>Image box</div>
      <div className="card__content">
        <Stat
          name="test"
          value={100}
          onDecrement={() => {}}
          onIncrement={() => {}}
        />
      </div>
    </div>
  )
}
