import { useEffect, useState } from "react"
import Suggestion from "./Suggestions"

export default function SearchAutocomplete() {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [user, setUser] = useState([])
    const [searchPara, setSearchPara] = useState('')
    const [showDropDown, setShowDropDown] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState([])
    function handle(e) {
        const query = e.target.value
        setSearchPara(query)
        if (query.length > 1) {
            const filterData =
                user && user.length ? user.filter((item) => item.toLowerCase().indexOf(query) > -1) : []
            setFilteredUsers(filterData)
            setShowDropDown(true)
        } else {
            setShowDropDown(false)
        }
    }

    async function fetchListOfUsers() {
        try {
            setLoading(true)
            const response = await fetch('https://dummyjson.com/users')
            const data = await response.json()
            console.log(data.users);
            if (data) {
                setLoading(false)
                setUser(data.users.map(dataItem => dataItem.firstName))
            }
            console.log(filteredUsers);


        } catch (e) {
            setLoading(false)
            setError(e.message)
        }
    }

    useEffect(() => {
        fetchListOfUsers()
    }, [])

    function handleClick(e){
        console.log(e.target.innerText);
        
        setSearchPara(e.target.innerText)
        setShowDropDown(false)
        setFilteredUsers([])
    }

    return (
       <>
        <div>
            <input type="text" placeholder="search here" value={searchPara} onChange={handle} />
        </div>
        <div>
            {
                showDropDown && <Suggestion handleClick={handleClick} data={filteredUsers}/>
            }
        </div>
       </>
    )
}