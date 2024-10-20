import { useEffect, useState } from "react"

export default function GitHubFinder() {
    const [userData, setUserData] = useState('cr-arya-2024')
    const [user, setUser] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

const url=`https://api.github.com/users/${userData}`
    async function fetchData() {
        try {
            setLoading(true)
            const response = await fetch(url)
            const data = await response.json()
            console.log(data);
            
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
        fetchData();
        setUserData('')
    }
    console.log("hellooooo");
    
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
<p><a href={`https://github.com/${user.login}`}>{user.url}</a></p>
<p>{user.followers}</p>
                </div>

            }
        </div>
    )
}