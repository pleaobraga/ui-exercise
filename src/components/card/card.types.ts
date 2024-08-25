export interface Stats {
  health: number
  attack: number
  defense: number
}

export interface CardElement {
  id: string
  stats: Stats
  image: {
    src: string
    alt?: string
    dimensions?: {
      width: number
      height: number
    }
  }
}

export interface CardProps extends CardElement {
  onRemove: (id: string) => void
  handleIncrementStat: (id: string, property: keyof Stats) => void
  handleDecrementStat: (id: string, property: keyof Stats) => void
}
