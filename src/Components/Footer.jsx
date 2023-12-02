import React from 'react'
import { useGlobalContext } from './utils/global.context'
import dhlogo from '../images/DH.png'

const Footer = () => {
  const {state} = useGlobalContext()
  return (
    <footer className={state.theme}>
        <p>Powered by</p>
        <img src={dhlogo} alt='DH-logo' />
    </footer>
  )
}

export default Footer
