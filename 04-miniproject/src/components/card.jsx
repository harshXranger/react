import React from 'react'
import { Bookmark } from 'lucide-react'
const card = (props) => {
    console.log(props.company);
    
    return (
        <div className="parent">
        <div className='card'>
            <div className="top">
                <img src={props.brandLogo} alt="" />
                <button>Save <Bookmark /> </button>
            </div>
            <div className="middle">
                <h5>{props.company}<span>{props.datePosted}</span></h5>
                <h2>{props.post}</h2>
                <div className="title">
                    <h4>{props.tag1} </h4>
                    <h4>{props.tag2} </h4>
                </div>
            </div>
            <div className="bottom">

                <div>
                    <h3>{props.pay}</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply now</button>




            </div>

        </div>
</div>
    )
}

export default card
