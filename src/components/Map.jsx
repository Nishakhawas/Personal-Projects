import React from 'react'

function Map()  {
    const userInfo= [
        {
            username : "Nisha",
            email:"nishakhawas",
            phoneno:9866556987
        }
        , {
            username : "Nisha",
            email:"nishakhawas",
            phoneno:9866556987
        }
        , {
            username : "Nisha",
            email:"nishakhawas",
            phoneno:9866556987
        } , {
            username : "Nisha",
            email:"nishakhawas",
            phoneno:9866556987
        } , {
            username : "Nisha",
            email:"nishakhawas",
            phoneno:9866556987
        } , {
            username : "Nisha",
            email:"nishakhawas",
            phoneno:9866556987
        }
    ]


  return (
    <div>
   {userInfo.map(user =>(
    <ul key={Math.random()*10}>
        <li>{user.username}</li>
        <li>{user.email}</li>
        <li>{user.phoneno}</li>
    </ul>
   ))}
   </div>
  )
}

export default Map
