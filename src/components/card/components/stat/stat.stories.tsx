import type { Meta, StoryObj } from '@storybook/react'
import { Stat } from '.'
import { STAT_MOCK } from './stats.mocks'

const meta = {
  title: 'Components/Card/Components/Stat',
  component: Stat,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Stat>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ...STAT_MOCK,
  },
}
