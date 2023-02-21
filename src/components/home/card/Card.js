import React,{useState} from 'react'

import {Data} from '././../CardData'

import './Card.css'

function Card() {
    const [data,setData]=useState(Data)
console.log(data)
console.log(Data)

  return (
    <div className='mapimg px-4 pt-5 '>
    {  data.map((val)=>{
        return(
            <div className='m-2'>
            <img src ={val.img} alt='' className='insideimg'/>
        </div>
        )
    })
      
    }
<hr/>
  
    </div>
  )
}

export default Card
