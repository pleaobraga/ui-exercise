export interface Attributes {
  health: number
  attack: number
  defense: number
}

export interface CardElement {
  id: string
  attributes: Attributes
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
  handleIncrement: (id: string, property: keyof Attributes) => void
  handleDecrement: (id: string, property: keyof Attributes) => void
}
