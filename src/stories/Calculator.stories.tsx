import type { Meta, StoryObj } from '@storybook/react'
import Calculator from '../components/Calculator'

const meta: Meta<typeof Calculator> = {
  component: Calculator,
  title: 'Calculator/Calculator',
  parameters: { backgrounds: { default: 'dark' }, layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof Calculator>

export const Default: Story = {}
