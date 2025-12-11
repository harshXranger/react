import React from 'react'
import { MoveRight } from 'lucide-react'
import Rightcardcontent from './rightcardcontent'
const rightcard = (props) => {
  return (
    <div className='h-full overflow-hidden relative w-60 rounded-4xl shrink-0 gap-10' >
        <img className='h-full  rounded-4xl  object-cover 'src={props.img} alt="" />
        
        <Rightcardcontent intro={props.intro} tag={props.tag} id={props.id}/>
    </div>
    
    
  )
}

export default rightcard
