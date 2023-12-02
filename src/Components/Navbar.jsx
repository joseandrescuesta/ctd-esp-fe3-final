import React from 'react'
import { Link } from 'react-router-dom'
import { initialState, useGlobalContext } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state, dispatch} = useGlobalContext()
  
  const toggleTheme =()=>{
    if (state.theme == ""){
      dispatch({type: 'CHANGE_THEME', payload: 'dark'})
    } else {
      dispatch({type: 'CHANGE_THEME', payload: initialState.theme})
    }
  }

  return (

      <nav className={state.theme}>
      <div className='logo'> <h1>🦷 DH-ODONTO</h1></div>
      {/* Aqui deberan agregar los links correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <Link to='/'>Home</Link>
      <Link to='/Contact'>Contacto</Link>
      <Link to='/Favs'>Destacados</Link>

      <button onClick={toggleTheme}>{(state.theme == "")? '🔳' : '🔲'}</button>
      </nav>

  )
}

export default Navbar