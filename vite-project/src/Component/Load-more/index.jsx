import { useEffect, useState } from "react"
import './style.css'
const url = `https://dummyjson.com/products?limit=20&skip=0`


export default function LoadMore() {
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [disable, setDisable] = useState(false)

    async function fetchData(geturl) {
        try {
            setLoading(true)
            const response = await fetch(geturl)
            const data = await response.json()
            if (data) {
                setLoading(false)
                setProducts((p) => [...p, ...data.products])
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
    return (<div className="div"><div className="conatianer">
        {
            products.map((items) => <div className="loader-container" key={items.id}>
                <h1>{items.title}</h1>
                <img src={items.images} />
                <h5>{items.description}</h5>
            </div>)
        }
        <button disabled={() => setDisable(disable === 100)} onClick={() => setCount(count + 20)}>Load More</button>
    </div>
    </div>)

}
