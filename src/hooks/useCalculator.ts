import { useState } from 'react'
import type { CalcState, Op } from '../types/calculator'

const MAX_DIGITS = 9
const MAX_VALUE = 999999999

const initState: CalcState = {
  display: '0',
  operator: null,
  operand: null,
  waitingForOperand: false,
}

const formatResult = (n: number): string => {
  if (!isFinite(n) || n < 0) return 'ERROR'
  if (n > MAX_VALUE) return 'ERROR'
  const str = String(n)
  if (!str.includes('.')) return str.length > MAX_DIGITS ? 'ERROR' : str
  const intPart = str.split('.')[0]
  if (intPart.length >= MAX_DIGITS) return intPart.length > MAX_DIGITS ? 'ERROR' : intPart
  const maxDec = MAX_DIGITS - intPart.length - 1
  if (maxDec <= 0) return intPart
  const rounded = parseFloat(n.toFixed(maxDec)).toString()
  return rounded.length > MAX_DIGITS ? intPart : rounded
}

const applyOp = (a: number, op: Op, b: number): number => {
  if (op === '+') return a + b
  if (op === '-') return a - b
  if (op === '*') return a * b
  if (op === '/') return b === 0 ? Infinity : a / b
  if (op === '%') return a % b
  return b
}

const hasDisplayRoom = (display: string): boolean => display.length < MAX_DIGITS

export const useCalculator = () => {
  const [state, setState] = useState<CalcState>(initState)

  const handleButton = (label: string) => {
    setState(prev => {
      if (label === 'C') return initState

      if (label === '+/-') {
        if (prev.display === 'ERROR' || prev.display === '0') return prev
        if (prev.display.startsWith('-')) return { ...prev, display: prev.display.slice(1) }
        if (!hasDisplayRoom(prev.display)) return prev
        return { ...prev, display: '-' + prev.display }
      }

      if (label === '.') {
        if (prev.display === 'ERROR') return prev
        if (prev.waitingForOperand) return { ...prev, display: '0.', waitingForOperand: false }
        if (prev.display.includes('.')) return prev
        if (!hasDisplayRoom(prev.display)) return prev
        return { ...prev, display: prev.display + '.' }
      }

      if (/^\d$/.test(label)) {
        if (prev.display === 'ERROR') return { ...prev, display: label, waitingForOperand: false }
        if (prev.waitingForOperand) return { ...prev, display: label, waitingForOperand: false }
        if (prev.display === '0') return { ...prev, display: label }
        if (!hasDisplayRoom(prev.display)) return prev
        return { ...prev, display: prev.display + label }
      }

      const isOp = ['+', '-', '*', '/', '%'].includes(label)
      if (isOp || label === '=') {
        if (prev.display === 'ERROR') return initState
        const current = parseFloat(prev.display)
        if (prev.operator && prev.operand !== null && !prev.waitingForOperand) {
          const result = applyOp(prev.operand, prev.operator, current)
          const formatted = formatResult(result)
          if (label === '=') return { ...initState, display: formatted, waitingForOperand: true }
          return {
            display: formatted,
            operator: label as Op,
            operand: formatted === 'ERROR' ? null : result,
            waitingForOperand: true,
          }
        }
        if (label === '=') return prev
        return { ...prev, operator: label as Op, operand: current, waitingForOperand: true }
      }

      return prev
    })
  }

  return { display: state.display, handleButton }
}
