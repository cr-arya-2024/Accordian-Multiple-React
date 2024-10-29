import { useEffect, useState } from "react"

export default function useFetch(url,options={}){

const[data,setData]=useState(null)
const[loading,setLoading]=useState(false)
const[error,setError]=useState(null)

async function fetchData() {
    try{
setLoading(true)
const response=await fetch(url)
const res=await response.json()
if(res){
    setData(res)
    setLoading(false)
}

    }
    catch(e){
        setError(`${e}.SomeError Occured`)
        setLoading(false)
    }
}


useEffect(()=>{
fetchData()

},[url])
return {data,error,loading}
}