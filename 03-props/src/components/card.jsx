import React from 'react'

const card = (props) => {
    
  return (
    <div className="card">
        <div className="image-profile">
          <img src={props.img} alt="Profile Photo" />
        </div>
        
        <h1>{props.user},{props.age}</h1><br />  
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, illum!</p>
        <button>View Profile</button>
    </div>
  )
      
}

export default card
