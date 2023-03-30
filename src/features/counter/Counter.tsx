import React, { useState } from 'react'
import type { RootState } from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '@/store/modules/counterSlide'

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const [payload, setPayload] = useState<number>(1)
  const dispatch = useDispatch()

  return (
    <div>
      <p>{ count }</p>
      <button onClick={() => dispatch(increment())}>++</button>
      <button onClick={() => dispatch(decrement())}>--</button>
      <input type="number" value={payload} onChange={e => e.target.value && setPayload(parseInt(e.target.value))} />
      <button onClick={() => dispatch(incrementByAmount(payload))}>payload</button>
    </div>
  )
}

export default Counter