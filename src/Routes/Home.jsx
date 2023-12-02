import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useGlobalContext } from '../Components/utils/global.context.jsx'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

// api --> https://jsonplaceholder.typicode.com/users

const Home = () => {
  
  const{state} = useGlobalContext()

  return (
    <main className=''>
      <h1>Dentistas</h1>
      <div className='card-grid'>
        {state.list.map((dentist)=><Card dentist={dentist} key={dentist.id}/>)}
      </div>
    </main>
  )
}

export default Home