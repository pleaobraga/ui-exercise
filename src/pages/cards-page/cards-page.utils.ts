import { images } from '../../utils/images'

const IMAGES_LENGTH = 3
const DEFAULT_STAT_VALUE = 0

export function getCharacterImage() {
  const index = Math.floor(Math.random() * IMAGES_LENGTH)

  return images[index]
}

export function getNewChar(cardID: number) {
  const charImage = getCharacterImage()

  return {
    id: 'card-id-' + cardID,
    stats: {
      attack: DEFAULT_STAT_VALUE,
      health: DEFAULT_STAT_VALUE,
      defense: DEFAULT_STAT_VALUE,
    },
    image: {
      src: charImage.url,
      dimensions: charImage.dimensions,
    },
  }
}
