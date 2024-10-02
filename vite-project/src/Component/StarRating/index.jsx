import { useState } from 'react'
import data from './data'
import './style.css'
export default function StarRating(){

const [selected,setSelected]=useState()
const [hover,setHover]=useState()
    return(
        <>
      <div className='container'>
      {
            data.map((dataItems,index)=><span 
        style={{
            color:index <=(selected || hover)  ? "orange" : "black",
            fontSize: "15rem",
            fontWeight:"bolder"
        }}
        onMouseEnter={()=>setHover(index)}
        onMouseLeave={()=>setHover(selected)}
            onClick={()=>setSelected(index)}
            key={index}>{dataItems}</span>)
        }
      </div>
        </>
    )
}