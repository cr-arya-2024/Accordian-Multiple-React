import { useEffect, useState } from "react"


export default function ImageSlider({url,limit}){
  
  const [images,setImages]=useState([])
    const [currentSlide,setCurrentSlide]=useState(0)
    const [errorMsg,setErrorMsg]=useState(null)
    const [loading,setLoading]=useState(false)
    async function fetchImages(getUrl) {
try{
    setLoading(true)
  let  response=await fetch (`${getUrl}?page=1&limit=${limit}`)
  const data=await response.json();
  if(data){
    setImages(data)
setLoading(false) 
}

}catch(e){
setErrorMsg(e.message)
setLoading(false)
}     
    }
  useEffect(()=>{
if(url!=="") fetchImages(url)
  },[url])
  if (loading){
    return <div>Loading data!Plz wait</div>
  }
if(errorMsg!==null){
    return <div style={{display:"flex",
    justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw"
    }}> 
        Error Occured!{errorMsg}
    </div>
}


return <div className="container">
{images.length && images ?
images.map((imagesItems,index)=><img
key={index}
src={imagesItems.download_url}    
alt={imagesItems.download_url}    
/>
):null
}
    </div>
}