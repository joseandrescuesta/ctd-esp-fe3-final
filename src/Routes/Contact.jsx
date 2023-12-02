import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className="page">
      <div className='contacto'>
      <h2>¿Quieres saber más?</h2>
      <p>Envianos tus datos y te contactaremos</p>
      </div> 
      <Form/>
    </div>
  )
}

export default Contact