import Display from './Display'
import ButtonGrid from './ButtonGrid'
import { useCalculator } from '../hooks/useCalculator'

const Calculator = () => {
  const { display, handleButton } = useCalculator()
  return (
    <div className='calculator'>
      <Display value={display} />
      <ButtonGrid onButton={handleButton} />
    </div>
  )
}

export default Calculator
