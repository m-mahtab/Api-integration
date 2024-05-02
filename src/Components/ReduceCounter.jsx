import React, { useReducer } from 'react'
import { useState } from 'react'

const initialState = 0;
const reducer = (state, action) =>{
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'initcount':
      return action.payload  
    default:
      return state;
  }
}

function ReduceCounter() {

  const [input, setInput] = useState(0)

  const [state, dispatch]  = useReducer(reducer, initialState)

  return (
    <div>
      <h1>Reducer Example</h1>

      <div>
        <label>Start Count</label>
        <input type={Number} value = {input} onChange = {(e)=>{setInput(parseInt(e.target.value))}}/>
        <br/>
        <button onClick={()=>dispatch({type : 'initcount' , payload: input})}>Initialize Count</button>
      </div>

      <p>{state}</p>
      <button onClick={()=>dispatch({type: "INCREMENT"})}>Increment</button>
      <button onClick={()=>dispatch({type: "DECREMENT"})}>Decrement</button>
    </div>
  )
}

export default ReduceCounter