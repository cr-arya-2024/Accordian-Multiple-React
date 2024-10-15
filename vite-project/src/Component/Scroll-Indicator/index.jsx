import { useEffect, useState } from "react"
import './style.css'
export default function ScrollIndicator({ url }) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [scrollPercentage, setScrollPercentage] = useState(0)
    async function fetchData(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(getUrl)
            const data = await response.json()

            if (data) {
                setData(data.products)
                setLoading(false)
            }

        } catch (e) {
            console.log(e)

            setError(e.message)
            setLoading(false)
        }
    }
    function handleScroll(){
       const howMuchScrolled=document.documentElement.scrollTop;
       const height=document.documentElement.scrollHeight-document.documentElement.clientHeight
       const percentage=((howMuchScrolled/height)*100)
       setScrollPercentage(percentage)
    
       
    }
    useEffect(()=>{
window.addEventListener("scroll",handleScroll)

return function (){
    window.removeEventListener("scroll",()=>{})
}
    },[])
    useEffect(() => {
        if (url !== '') fetchData(url)
    }, [url])
    console.log(data, loading);
    if (loading) {
        return <div>loading</div>
    }
    if (error !== null) {
        return <div>error {error}</div>
    }

    return (<div className="main">
        <h1>custom Scroll Indicator</h1>
        <div className="outSideBar"> 
            <div className="insideBar" style={{width:`${scrollPercentage}%`}}>

            </div>
        </div>
        <div className="data-container">{
            data.length > 0 ?
                data.map((dataItems) => 
                    <div className="data-containers">
                        <p key={dataItems.id}>{dataItems.title}</p>
                        <p >{dataItems.description}</p>

                    </div>
                )
                : null

        }
        </div>
    </div>)
}