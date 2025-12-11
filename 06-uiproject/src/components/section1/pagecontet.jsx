import React from 'react'
import Righttext from './righttext' 
import Lefttext from './lefttext'   
const pagecontet = (props) => {
  return (
    <div className='flex justify-between h-[90vh] py-10 px-18  items-center gap-10'>
        <Lefttext/>
        <Righttext users={props.users}/>
    </div>
  )
}

export default pagecontet
