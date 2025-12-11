import React from 'react'

const App = () => {
  function btnclicked() {
    console.log("Button clicked");
  }

  return (
    <div>
      <button onDoubleClick={btnclicked} onMouseEnter={btnclicked}>Button</button>
    </div>
  )
}

export default App
