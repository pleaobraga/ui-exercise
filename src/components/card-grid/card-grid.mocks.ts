import { images } from '../../utils/images'

export const CARD_MOCK_1 = {
  id: 'CARD MOCK 1',
  imageSrc: images[0].url,
  imageDimensions: images[0].dimensions,
}

export const CARD_MOCK_2 = {
  id: 'CARD MOCK 2',
  imageSrc: images[1].url,
  imageDimensions: images[1].dimensions,
}

export const CARD_MOCK_3 = {
  id: 'CARD MOCK 3',
  imageSrc: images[2].url,
  imageDimensions: images[2].dimensions,
}
export const CARD_MOCK_4 = {
  id: 'CARD MOCK 4',
  imageSrc: images[0].url,
  imageDimensions: images[0].dimensions,
}

export const CARD_MOCK_5 = {
  id: 'CARD MOCK 5',
  imageSrc: images[1].url,
  imageDimensions: images[1].dimensions,
}

export const CARD_MOCK_6 = {
  id: 'CARD MOCK 6',
  imageSrc: images[2].url,
  imageDimensions: images[2].dimensions,
}

export const CARD_GRID_MOCK = [CARD_MOCK_1, CARD_MOCK_2, CARD_MOCK_3]

export const CARD_GRID_MOCK_2_ROWS = [
  ...CARD_GRID_MOCK,
  CARD_MOCK_4,
  CARD_MOCK_5,
  CARD_MOCK_6,
]
