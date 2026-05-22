import type { ButtonDef } from '../types/calculator'

export const BUTTON_LAYOUT: ButtonDef[] = [
  { label: 'C', variant: 'special' },
  { label: '+/-', variant: 'special' },
  { label: '%', variant: 'special' },
  { label: '/', variant: 'op' },
  { label: '7', variant: 'num' },
  { label: '8', variant: 'num' },
  { label: '9', variant: 'num' },
  { label: '*', variant: 'op' },
  { label: '4', variant: 'num' },
  { label: '5', variant: 'num' },
  { label: '6', variant: 'num' },
  { label: '-', variant: 'op' },
  { label: '1', variant: 'num' },
  { label: '2', variant: 'num' },
  { label: '3', variant: 'num' },
  { label: '+', variant: 'op' },
  { label: '0', variant: 'zero' },
  { label: '.', variant: 'num' },
  { label: '=', variant: 'equals' },
]
