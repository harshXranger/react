import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

const App = () => {
  const users=[{
    img:"https://i.pinimg.com/736x/f6/e3/66/f6e366ead400ded72dfa161efd62e0a0.jpg",
    intro:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tag:"Satisfied",
  },
  {
    img:"https://i.pinimg.com/1200x/3e/57/72/3e577248e400a91720d09fc7d9f6fdf6.jpg",
    intro:"lorem10 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tag:"Unsatisfied",
  },
  {
    img:"https://i.pinimg.com/736x/5f/ef/c6/5fefc68a080a684fcaf6bee95a0e9f7b.jpg",
    intro:"lorem15 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tag:"Underserved",
  },
  {
    img:"https://i.pinimg.com/736x/5f/ef/c6/5fefc68a080a684fcaf6bee95a0e9f7b.jpg",
    intro:"lorem15 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tag:"Underserved",
  }]
  return (
    <div >
      <Section1 users={users}/>
      <Section2/> 
    </div>
  )
}

export default App
