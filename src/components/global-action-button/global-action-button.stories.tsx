import type { Meta, StoryObj } from '@storybook/react'
import { GlobalActionButton } from '.'
import { GLOBAL_ACTION_BUTTON_MOCK } from './global-action-button.mocks'

const meta = {
  title: 'Components/Global Action Button ',
  component: GlobalActionButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GlobalActionButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ...GLOBAL_ACTION_BUTTON_MOCK,
  },
}
