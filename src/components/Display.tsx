import type { FC } from 'react'

interface Props { value: string }

const Display: FC<Props> = ({ value }) => (
  <div className='display' data-testid='display'>
    <span className={value === 'ERROR' ? 'display__error' : 'display__value'}>
      {value}
    </span>
  </div>
)

export default Display
