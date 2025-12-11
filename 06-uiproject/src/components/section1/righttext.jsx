import React from 'react'
import Rightcard from './rightcard'
const righttext = (props) => {
  return (
    <div id="right" className='-translate-y-10 h-120 w-7/9 p-4 flex overflow-x-auto gap-6 '>
        {props.users.map(function(elem,idx){
            return <Rightcard img={elem.img} intro={elem.intro} tag={elem.tag} key={idx} id={idx+1}/>
        })}
    </div>
  )
}

export default righttext
