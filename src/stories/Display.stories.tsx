import type { Meta, StoryObj } from '@storybook/react'
import Display from '../components/Display'

const meta: Meta<typeof Display> = {
  component: Display,
  title: 'Calculator/Display',
  parameters: { backgrounds: { default: 'dark' } },
}
export default meta
type Story = StoryObj<typeof Display>

export const Default: Story = { args: { value: '0' } }
export const WithNumber: Story = { args: { value: '42' } }
export const MaxLength: Story = { args: { value: '999999999' } }
export const DecimalResult: Story = { args: { value: '3.1428571' } }
export const ErrorState: Story = { args: { value: 'ERROR' } }
