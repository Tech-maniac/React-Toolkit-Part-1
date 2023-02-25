import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './toolkit/reducer'

const App = () => {

  const count = useSelector((state)=>state.counter.value);

  //useDispatch Hook : 
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={()=>dispatch(increment())}> Increment </button>
      <span> {count} </span>
      <button onClick={()=>dispatch(decrement())}> Decrement </button>
    </>
  )
}

export default App