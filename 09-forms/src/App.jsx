import React from 'react'

const App = () => {
  const submithandler=(e)=>{
    console.log("form submitted");
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={submithandler}  >
        <label >Name:</label>
        <input type="text" placeholder='Enter name:' /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
