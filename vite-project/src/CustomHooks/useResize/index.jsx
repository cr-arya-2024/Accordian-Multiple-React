import { useEffect, useState } from "react";

export default function useResize(){

const [dimenshion,setDimenshions]=useState({width:0,height:0})

useEffect(()=>{
    function handleResize(){
        setDimenshions({
            width:window.innerWidth,
            height:window.innerHeight
        })
    }

window.addEventListener("resize",handleResize)
 return ()=>{
    window.removeEventListener("resize",handleResize)
 }

},[dimenshion])
return dimenshion;
}