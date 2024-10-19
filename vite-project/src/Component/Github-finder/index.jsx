import { useEffect, useState } from "react"

export default function GitHubFinder() {
    const [userData, setUserData] = useState('tom')
    const [user, setUser] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)


    async function fetchData() {
        try {
            setLoading(true)
            const response = await fetch(`https://api.github.com/users/${userData}`)
            const data = await response.json()
            if (data) {
                setLoading(false)
                setUser(data)

            }

        } catch (e) {
            setLoading(false)
            setError(e.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    if (loading) {
        return <div>loading.......</div>
    }
    if (error !== null) {
        return <div>got an error</div>
    }

    function handle() {
        setUserData('')
    }
    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Enter the Git user Id"
                    value={userData}
                    onChange={(e) => setUserData(e.target.value)} />
                <button onClick={handle}> Search</button>
            </div>
            {
                <div>
                    <img src={user.avatar_url} alt="Dp" />
<a href={`https://api.github.com/users/${user.login}`}></a>
                </div>

            }
        </div>
    )
}