import React,{useState} from 'react'
import data from './data'
import './style.css'
export default function Accordian(){
    const [selected,setSelected]=useState()
    let [enableMultiSelection,setEnableMultiSelection]=useState(false)
    const[multiple,setMultiple]=useState([])
function handleSingle(id){
    setSelected(id ===selected ? null : id)
}
function handleMultiSelection(){
    enableMultiSelection===false ? setEnableMultiSelection(!enableMultiSelection):setEnableMultiSelection(false);

   
   console.log(enableMultiSelection);
}
function selection2 (id){
const    cpyMultiple=[...multiple]
const findIndex=cpyMultiple.indexOf(id)
findIndex===-1 ? cpyMultiple.push(id) :cpyMultiple.splice(findIndex,1)
setMultiple(cpyMultiple)
console.log(findIndex,multiple);
}
    return(
    <>
    <div className='wrapper'>
<button onClick={handleMultiSelection} className='enable-btn' >Enable Multi Selection</button>

{
    data.map((datas)=><div onClick={
        enableMultiSelection ?
        ()=>selection2(datas.id)
       : ()=>handleSingle(datas.id)}className='item'>{datas.question}
  <span>+</span>
    {
selected===datas.id || multiple.indexOf(datas.id) !==-1 ? <div className='answer'>{datas.answer}</div>:null
     } 
      {/* multiple.indexOf(datas.id) !==-1 means index of data id in array is not -1 antha(if its -1 then the id is not present in the array) */}
    </div>)
}


    </div>
    
    </>
  )
}