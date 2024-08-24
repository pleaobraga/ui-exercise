import { describe, it, expect, vi } from 'vitest'
import { getCharacterImage, getNewChar } from '../cards-page.utils'
import { images } from '../../../utils/images'

vi.mock('../../utils/images', () => ({
  images: [
    { url: 'image1.jpg', dimensions: { width: 100, height: 100 } },
    { url: 'image2.jpg', dimensions: { width: 200, height: 200 } },
    { url: 'image3.jpg', dimensions: { width: 300, height: 300 } },
  ],
}))

describe('cards-page.utils', () => {
  describe('getCharacterImage', () => {
    it('returns an image from the images array', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0.5)

      const image = getCharacterImage()
      expect(images).toContainEqual(image)

      vi.restoreAllMocks()
    })

    it('returns the correct image based on random index', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0 / 3)
      expect(getCharacterImage()).toEqual(images[0])

      vi.spyOn(Math, 'random').mockReturnValue(1 / 3)
      expect(getCharacterImage()).toEqual(images[1])

      vi.spyOn(Math, 'random').mockReturnValue(2 / 3)
      expect(getCharacterImage()).toEqual(images[2])

      vi.restoreAllMocks()
    })
  })

  describe('getNewChar', () => {
    it('returns a new character object with default attributes', () => {
      const cardID = 1
      const charImage = images[0]
      vi.spyOn(Math, 'random').mockReturnValue(0)

      const newChar = getNewChar(cardID)

      expect(newChar).toEqual({
        id: 'card-id-' + cardID,
        attributes: {
          attack: 0,
          health: 0,
          defense: 0,
        },
        image: {
          src: charImage.url,
          dimensions: charImage.dimensions,
        },
      })

      vi.restoreAllMocks()
    })
  })
})
