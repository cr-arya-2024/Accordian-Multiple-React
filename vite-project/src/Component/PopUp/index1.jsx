
import { useState } from "react"


import './style.css'
import Modal from "."



export default function ModalTest(){
    const[showModalPopUp,setShowModalPopUp]=useState(false)
function handle(){
    setShowModalPopUp(!showModalPopUp)
}
function onClose(){
    setShowModalPopUp(false)
}
    return <div>
        <button onClick={handle}>Open Modal Popup</button>
    {
        showModalPopUp && <Modal onClose={onClose}  body={<div>hey hello namaskara</div>}/>
    }
    
    </div>
}

