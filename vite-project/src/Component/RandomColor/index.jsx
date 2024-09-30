import React,{useState} from "react";
import './style.css'
export default function RandomColor(){

function  generateRandomNumber(max,min){
    return min+Math.floor(Math.random ()*(max-min+1))
}
function generateRandomRGBColor(){
 const r=generateRandomNumber(255,0)
 const g=generateRandomNumber(255,0)
 const b=generateRandomNumber(255,0)
 return `rgb(${r},${g},${b})`
}
function toSetRGB(){
    setTypeOfColor('rgb')
}
function toSetHex(){
    setTypeOfColor('hex')
}
function generateRandomHexColor(){
let hex="#"
let hexComponents=[1,2,0,3,4,5,6,7,8,9,'A','B','C','D','E','F']
for(let i=0;i<6;i++){
    hex+=hexComponents[generateRandomNumber(15,0)]
}
return `${hex}`
}
function handle(){
    typeOfColor ==='hex' ? setColor(generateRandomHexColor) : setColor(generateRandomRGBColor)
}
const[typeOfColor,setTypeOfColor]=useState("hex")
const[color,setColor]=useState("rgb(0,0,0)")
    return(
        <>
<div  className="helo" style={{
    height:"100vh",
    width:"100vw",
    background:color,
    fontSize:"xx-large",
    fontWeight:"2900"
}}>
  <div style={{display:"flex",
   marginBottom:"30px"
  }}>
  <button style={{
     padding:"20px" ,marginRight:"10px", 
     background:"rgba(255,255,255,0.3)", 
     color:"white",border:"none", 
     fontSize:"xx-large",
    fontWeight:"2900",
    
    }}
    onClick={toSetHex}>
    HEX</button>
  <button style={{ padding:"20px",
   background:"rgba(255,255,255,0.3)",
    color:"white",
    border:"none", 
    fontSize:"xx-large",
    fontWeight:"2900",
   
    }}
    onClick={toSetRGB}>RGB</button>
  </div>
   
    <button style={{padding:"20px 30px",
        marginBottom:"40px",
        border:"none",
         fontSize:"xx-large",
    fontWeight:"2900",
    borderRadius:"5px",
    background:"rgba(255,255,255,0.3)",
    color:"white"
    }} onClick={handle}>Generate Random  Color</button>
    <div>
    
    <h1 style={{
        color:"#ffffff"
    }}>{color}</h1></div>
    </div>        
        </>
    )
}