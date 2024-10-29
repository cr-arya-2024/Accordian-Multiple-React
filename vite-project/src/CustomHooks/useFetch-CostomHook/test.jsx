import useFetch from "."

export default function UseFetchHookTEst() {

    const { data, error, loading } = useFetch('https://dummyjson.com/products', {})


    return <div>
        <h1>useFetchHook</h1>
        {
            error ? <h1>Smtg went wrrong.{error}</h1> : null
        }
        {
            loading ? <h1>plz wait for a min</h1> : null
        }
        {
            data ? data.products.map(dataItems => <div>{dataItems.title}</div>) : null
        }
    </div>
}