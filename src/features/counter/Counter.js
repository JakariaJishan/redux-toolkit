import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice'

function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

  return (
    <div>
        <h1>Counter app</h1>

        <div>
            <button onClick={() =>dispatch(increment())}>Increment</button>
            {count}
            <button onClick={() =>dispatch(decrement())}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter