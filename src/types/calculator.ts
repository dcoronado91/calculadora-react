export type Op = '+' | '-' | '*' | '/' | '%' | null

export type Variant = 'num' | 'op' | 'special' | 'equals' | 'zero'

export interface ButtonDef {
  label: string
  variant: Variant
}

export interface CalcState {
  display: string
  operator: Op
  operand: number | null
  waitingForOperand: boolean
}
