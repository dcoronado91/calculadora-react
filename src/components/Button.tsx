import type { FC } from 'react'
import type { Variant } from '../types/calculator'

interface Props {
  label: string
  variant: Variant
  onClick: () => void
}

const Button: FC<Props> = ({ label, onClick, variant }) => (
  <button className={`btn btn--${variant}`} onClick={onClick} type='button'>
    {label}
  </button>
)

export default Button
