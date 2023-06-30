import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../services/api'

const Listar = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
    
  }, [])
  const getUsers = async () => {
    const response = await getAllUsers();
    setUsers(response.data)
    console.log(users)
  }
  return (
    <>
        <h2>Lista de usuários</h2>
        <ul>
          {
            users.map((data)=>{
              return <li key={data.id}>{data.name}</li>
            })
          }
          
        </ul>
    </>
  )
}

export default Listar