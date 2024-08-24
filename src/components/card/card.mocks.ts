import { images } from '../../utils/images'

export const CARD_MOCK = {
  id: 'CARD MOCK',
  image: {
    src: images[0].url,
    dimensions: images[0].dimensions,
  },
  attributes: {
    health: 100,
    attack: 50,
    defense: 40,
  },
  onRemove: () => {},
  handleIncrement: () => {},
  handleDecrement: () => {},
}
