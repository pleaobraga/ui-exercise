import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '.'
import { CARD_MOCK } from './card.mocks'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ...CARD_MOCK,
  },
}
