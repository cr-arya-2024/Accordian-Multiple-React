import { useEffect, useState } from "react"
import './style.css'
const url = 'https://dummyjson.com/products?limit=20'


export default function LoadMore() {
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    async function fetchData(geturl) {
        try {
            setLoading(true)
            const response = await fetch(geturl )
            const data = await response.json()
            if (data) {
                setLoading(false)
                setProducts(data.products)
            }
        } catch (e) {
            setLoading(false)
            setErrorMsg(e.message)
        }
    }
    console.log(products);

    useEffect(() => {
        if (url !== '') fetchData(url)
    }, [url])

    if (loading) {
        return <div>Loading please wait!</div>
    }
    if (errorMsg) {
        return <div>Got an error! ${errorMsg}</div>
    }
    return (<div className="conatianer">
        {
            products.map((items) => <div className="loader-container" key={items.id}>
<h1>{items.title}</h1>
<img src={items.images}/>
<h5>{items.description}</h5>



            </div>)
        }

    </div>)

}
