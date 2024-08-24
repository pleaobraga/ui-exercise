import { images } from '../../utils/images'

const IMAGES_LENGTH = 3

const DEFAULT_ATTRIBUTE_VALUE = 0

export function getCharacterImage() {
  const index = Math.floor(Math.random() * IMAGES_LENGTH)

  return images[index]
}

export function getNewChar(cardID: number) {
  const charImage = getCharacterImage()

  return {
    id: 'card-id-' + cardID,
    attributes: {
      attack: DEFAULT_ATTRIBUTE_VALUE,
      health: DEFAULT_ATTRIBUTE_VALUE,
      defense: DEFAULT_ATTRIBUTE_VALUE,
    },
    image: {
      src: charImage.url,
      dimensions: charImage.dimensions,
    },
  }
}
