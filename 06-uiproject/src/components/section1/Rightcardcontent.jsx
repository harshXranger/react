import React from 'react'
import { MoveRight } from 'lucide-react'
const rightcardcontent = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-60 p-5 flex flex-col  justify-between'>
            <h2 className=' text-2xl rounded-full w-10 h-10 items-center flex  justify-center bg-white font-bold '>{props.id}</h2>
            <div>
                <p className=' py-11 font-mono  leading-relaxed text-white'>{props.intro}</p>
                <div className='flex items-center justify-between'>
                    <button className='bg-blue-700 text-white font-semibold px-10 py-2 rounded-3xl'>{props.tag}</button>
                    <button className='bg-blue-700 text-white font-semibold px-2 py-2 rounded-3xl'><MoveRight /></button>
                </div>
            </div>
        </div>
    )
}

export default rightcardcontent

