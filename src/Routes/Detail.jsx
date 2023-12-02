import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentist, setDentist] = useState({})
  const {id} = useParams()
  console.log(id)
  const url = 'https://jsonplaceholder.typicode.com/users/'+ id

  useEffect(()=>{
    axios(url)
    .then(res => setDentist(res.data))
  },[])
  return (
    <div className="page">
      <h1>Información del dentista</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        <table>
          <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Detail