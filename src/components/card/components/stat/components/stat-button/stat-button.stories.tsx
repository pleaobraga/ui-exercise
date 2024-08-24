import type { Meta, StoryObj } from '@storybook/react'
import { StatButton } from '.'

const meta = {
  title: 'Components/Card/Components/StatButton',
  component: StatButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StatButton>

export default meta
type Story = StoryObj<typeof meta>

export const Decrement: Story = {
  args: {
    kind: 'decrement',
  },
}

export const Increment: Story = {
  args: {
    kind: 'increment',
  },
}
