import React from 'react'
import Navbar from './navbar'
import Lefttext from './lefttext'
import PageContent from './pagecontet'
const Section1 = (props) => {
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <PageContent users={props.users}/>

     
    </div>
  )
}

export default Section1
