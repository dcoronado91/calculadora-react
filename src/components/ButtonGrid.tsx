import type { FC } from 'react'
import Button from './Button'
import { BUTTON_LAYOUT } from '../constants/buttons'

interface Props { onButton: (label: string) => void }

const ButtonGrid: FC<Props> = ({ onButton }) => (
  <div className='button-grid'>
    {BUTTON_LAYOUT.map((btn) => (
      <Button key={btn.label} {...btn} onClick={() => onButton(btn.label)} />
    ))}
  </div>
)

export default ButtonGrid
