import { useState } from "react"
import QRCode from "react-qr-code"

export default function QrCode(){
    const [input,setInput]=useState('')
    const [qr,setQr]=useState('')
    const handle=()=>{
        setQr(input)
setInput('')
    }
    return <div style={{display:"flex",alignItems:'center',justifyContent:"center",height:"100vh",width:"100vw",flexDirection:"column",gap:"40px"}}>

<h1>Genrate QR Code</h1>
<div>
<input style={{padding:"20px 40px",fontSize:"25px"}} type="text" value={input} onChange={(e)=>setInput(e.target.value)}placeholder="Enter the text"/>
<button style={{padding:"20px 40px",fontSize:"25px",color:"white",backgroundColor:"black"}}  onClick={handle}>Generate</button>
</div>
<QRCode value={qr}/>

    </div>
}