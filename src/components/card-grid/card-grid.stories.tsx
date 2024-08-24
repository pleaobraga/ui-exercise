import type { Meta, StoryObj } from '@storybook/react'
import { CardGrid } from '.'
import { CARD_GRID_MOCK, CARD_GRID_MOCK_2_ROWS } from './card-grid.mocks'

const meta = {
  title: 'Components/Card Grid',
  component: CardGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardGrid>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    cards: [...CARD_GRID_MOCK],
  },
}

export const TwoRows: Story = {
  args: {
    cards: [...CARD_GRID_MOCK_2_ROWS],
  },
}

export const Empty: Story = {
  args: {
    cards: [],
  },
}
