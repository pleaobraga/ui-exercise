import { images } from '../../utils/images'

const IMAGES_LENGTH = 3

export function getCharacterImage() {
  const index = Math.floor(Math.random() * IMAGES_LENGTH)

  return images[index]
}

export function getNewChar(cardsLength: number) {
  const charImage = getCharacterImage()

  return {
    id: 'card-id-' + cardsLength,
    attack: 0,
    health: 0,
    defense: 0,
    imageDimensions: charImage.dimensions,
    imageSrc: charImage.url,
  }
}
