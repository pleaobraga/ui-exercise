import { images } from '../../utils/images'

const IMAGES_LENGTH = 3

export function getCharacterImage() {
  const index = Math.floor(Math.random() * IMAGES_LENGTH)

  return images[index]
}

export function getNewChar(cardID: number) {
  const charImage = getCharacterImage()

  console.log('charImage', charImage)

  return {
    id: 'card-id-' + cardID,
    attack: 0,
    health: 0,
    defense: 0,
    image: {
      src: charImage.url,
      dimensions: charImage.dimensions,
    },
  }
}
