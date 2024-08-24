import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '.'
import { images } from '../../utils/images'

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
    imageSrc: images[0].url,
    imageDimensions: images[0].dimensions,
  },
}
