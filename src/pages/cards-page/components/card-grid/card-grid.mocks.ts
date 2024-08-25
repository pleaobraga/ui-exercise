import { images } from '../../../../utils/images'

export const FUNCTIONS_MOCK = {
  onRemoveCard: () => {},
  onDecrementStat: () => {},
  onIncrementStat: () => {},
}

export const CARD_MOCK_1 = {
  id: 'CARD MOCK 1',
  image: {
    src: images[0].url,
    dimensions: images[0].dimensions,
  },
  stats: {
    health: 100,
    attack: 50,
    defense: 40,
  },
}

export const CARD_MOCK_2 = {
  id: 'CARD MOCK 1',
  image: {
    src: images[1].url,
    dimensions: images[1].dimensions,
  },
  stats: {
    health: 100,
    attack: 50,
    defense: 40,
  },
}

export const CARD_MOCK_3 = {
  id: 'CARD MOCK 3',
  image: {
    src: images[2].url,
    dimensions: images[2].dimensions,
  },
  stats: {
    health: 100,
    attack: 50,
    defense: 40,
  },
}

export const CARD_MOCK_4 = {
  id: 'CARD MOCK 4',
  image: {
    src: images[0].url,
    dimensions: images[0].dimensions,
  },
  stats: {
    health: 100,
    attack: 50,
    defense: 40,
  },
}

export const CARD_MOCK_5 = {
  id: 'CARD MOCK 5',
  image: {
    src: images[1].url,
    dimensions: images[1].dimensions,
  },
  stats: {
    health: 100,
    attack: 50,
    defense: 40,
  },
}

export const CARD_MOCK_6 = {
  id: 'CARD MOCK 6',
  image: {
    src: images[2].url,
    dimensions: images[2].dimensions,
  },
  stats: {
    health: 100,
    attack: 50,
    defense: 40,
  },
}

export const CARD_GRID_MOCK = [CARD_MOCK_1, CARD_MOCK_2, CARD_MOCK_3]

export const CARD_GRID_MOCK_2_ROWS = [
  ...CARD_GRID_MOCK,
  CARD_MOCK_4,
  CARD_MOCK_5,
  CARD_MOCK_6,
]
