import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, beforeEach } from 'vitest'
import Calculator from '../components/Calculator'

const getDisplay = () => screen.getByTestId('display').textContent ?? ''

const press = async (user: ReturnType<typeof userEvent.setup>, ...labels: string[]) => {
  for (const label of labels) {
    await user.click(screen.getByRole('button', { name: label }))
  }
}

describe('Calculator — display behavior', () => {
  beforeEach(() => render(<Calculator />))

  it('concatenates digits on the display', async () => {
    const user = userEvent.setup()
    await press(user, '1', '2', '3')
    expect(getDisplay()).toBe('123')
  })

  it('ignores digits beyond the 9-character limit', async () => {
    const user = userEvent.setup()
    await press(user, '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '0')
    expect(getDisplay().length).toBeLessThanOrEqual(9)
  })

  it('resets display when C is pressed', async () => {
    const user = userEvent.setup()
    await press(user, '9', '8', '7', 'C')
    expect(getDisplay()).toBe('0')
  })
})

describe('Calculator — operations', () => {
  beforeEach(() => render(<Calculator />))

  it('shows intermediate result when chaining operators', async () => {
    const user = userEvent.setup()
    await press(user, '5', '+', '3', '*')
    expect(getDisplay()).toBe('8')
    await press(user, '2', '=')
    expect(getDisplay()).toBe('16')
  })

  it('shows ERROR when subtraction produces a negative number', async () => {
    const user = userEvent.setup()
    await press(user, '3', '-', '9', '=')
    expect(getDisplay()).toBe('ERROR')
  })

  it('shows ERROR when result exceeds 999999999', async () => {
    const user = userEvent.setup()
    await press(user, '9', '9', '9', '9', '9', '9', '9', '9', '9', '+', '1', '=')
    expect(getDisplay()).toBe('ERROR')
  })

  it('truncates long decimal results like 22/7 to 9 characters', async () => {
    const user = userEvent.setup()
    await press(user, '2', '2', '/', '7', '=')
    const result = getDisplay()
    expect(result.length).toBeLessThanOrEqual(9)
    expect(result).not.toBe('ERROR')
    expect(parseFloat(result)).toBeCloseTo(3.142857, 4)
  })

  it('computes modulo correctly', async () => {
    const user = userEvent.setup()
    await press(user, '1', '0', '%', '3', '=')
    expect(getDisplay()).toBe('1')
  })

  it('toggles sign with +/- and allows negative operand input', async () => {
    const user = userEvent.setup()
    await press(user, '5', '+/-')
    expect(getDisplay()).toBe('-5')
    await press(user, '+/-')
    expect(getDisplay()).toBe('5')
  })
})
