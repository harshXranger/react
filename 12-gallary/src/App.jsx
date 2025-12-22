import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
const App = () => {
  const [UserData, setUserData] = useState([])
  const [index, setIndex] = useState(1);
  const getdata = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page='+index+'&limit=15', { username: 'Harsh', password: 'admin' })
    setUserData(response.data);
    console.log(response.data);


  }
  useEffect(function(){
    getdata()
  },[UserData])
  let printUserData = <h3 className='text-white text-3xl absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>Loading....</h3>
  if (UserData.length > 0) {
    printUserData = UserData.map(function (elem, idx) {
      return <div>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-50 bg-white rounded overflow-hidden '>
          <img className='h-full bg-cover object-cover' src={elem.download_url} alt="" />
        </div>
        </a>
        
        <h3 className='text-white  font-extrabold text-2  xl'>{elem.author}</h3>
      </div>

    })
  }
  return (
    <div className="bg-black min-h-screen w-full p-4 w">
      
      <div className="flex justify-center items-center">
        {/* <button onClick={getdata} className='text-white bg-green-500 rounded min-h-1/2 w-1/10 m-4 p-4 flex justify-center active:scale-95'>GET DATA</button> */}

      </div>
      <div className=' flex justify-evenly flex-wrap gap-2 px-10 '>
        {printUserData}
      </div>
      <div className='flex justify-center'>
        <button className='border-gray-100 text-black bg-amber-300 inline-flex justify-center px-6 py-3  m-4 gap-5 rounded text-xl font-mono cursor-pointer active:scale-x-95'onClick={()=>{
          if(index>1){
          setIndex(index-1)
          setUserData([]);
          }
        }}>Prev</button> 
        <h1 className='text-white space-x-80 py-6 '>Page {index}</h1>
        <button className='border-gray-100 text-black bg-amber-300 inline-flex justify-center px-6 py-3  m-4 gap-5 rounded text-xl font-mono cursor-pointer active:scale-x-95'onClick={()=>{
          setIndex(index+1)
          setUserData([]);
        }}>Next</button>
      </div>



    </div>
  )
}

export default App
