import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Button from '../components/Button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Calculator/Button',
  parameters: { backgrounds: { default: 'dark' } },
  args: { onClick: fn() },
}
export default meta
type Story = StoryObj<typeof Button>

export const Number: Story = { args: { label: '7', variant: 'num' } }
export const Operator: Story = { args: { label: '+', variant: 'op' } }
export const Special: Story = { args: { label: 'C', variant: 'special' } }
export const Equals: Story = { args: { label: '=', variant: 'equals' } }
export const Zero: Story = { args: { label: '0', variant: 'zero' } }
