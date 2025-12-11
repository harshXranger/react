import React, { useState } from 'react'

const App = () => {
  const [num,setNum]=useState(0);
  const increse=()=>{
    setNum(num+1);

  }
  const decrese=()=>{
    setNum(num-1);
  }
  const increseby5=()=>{
    setNum(num+5)
  }
  
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increse}>Increse</button> <button onClick={decrese}>Decrases</button>
      <button onClick={increseby5}>Increse5</button>
    </div>
  )
}

export default App
