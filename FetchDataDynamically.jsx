import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FetchDataDynamically() {

    let [user,setUser] = useState({})

    let [search,setSearch] = useState("")

    let updateUser = (event) =>
    {
        setSearch(event.target.value);

        // Or can use the below method to update value
        
        // setSearch(()=>
        // {
        //    return event.target.value
        // })
    }

    useEffect(()=>
    {
        axios.get(`https://api.github.com/users/${search}`)  .then((result)=>
        {
            setUser(result.data)
        })
    })


  return (
    <div>

        <input type="search" placeholder='Enter Name' value={search} onChange={updateUser} />

        {
            (search)?(<div key={user.id}>
                <h1>Name: {user.login}</h1>
                <img src={user.avatar_url} alt="" height={300} width={300} />
            </div>): <h1>Enter User Name</h1>
        }
                    
    </div>
  )
}

export default FetchDataDynamically;