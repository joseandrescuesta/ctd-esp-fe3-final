import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')

  const emailValido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleNombre = (event) => {
    setShow(false)
    setNombre(event.target.value.trimStart())
  }
  const handleEmail = (event) => {
    setShow(false)
    setEmail(event.target.value)
  }

  const handleSubmit = (event) => {

    if (nombre.length > 5 && emailValido.test(email)) {
      setShow(true)
      setError(false)
    } else {
      setError(true)
      setShow(false)
    }

    event.preventDefault()
  }

  return (
    <div>
      <h2 style={{  marginLeft: '5vw'}}>Datos de contacto</h2>
      <div>
        <form>
          <label>Nombre completo</label>
          <input type="text" placeholder='Nombre' onChange={handleNombre} />
          <label>Correo electronico</label>
          <input type="email" placeholder='Email' onChange={handleEmail} />
          <button onClick={handleSubmit}>Enviar</button>
        </form>


        {show ?
          <h4 style={{ marginLeft: '5vw'}}>Gracias {nombre}, te contactaremos cuanto antes vía mail</h4> : null
        }

        {error ?
          <h4 style={{ color: 'red', marginLeft: '5vw'}}>Por favor chequea que la información sea correcta</h4> : null
        }
      </div>
    </div>
  )


};

export default Form;
