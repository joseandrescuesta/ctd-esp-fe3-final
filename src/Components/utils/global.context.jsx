import { createContext, useContext, useState, useEffect, useReducer } from "react";
import axios from 'axios'
import {reducer} from '../../reducers/reducer.js'
import { json } from "react-router-dom";

export const initialState = {
  theme: "", 
  list: [], 
  favs: JSON.parse(localStorage.getItem('favs')) || [],
}

const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {

  const url='https://jsonplaceholder.typicode.com/users/'

  const [state, dispatch] =useReducer(reducer, initialState)
  console.log(state)
  useEffect(()=>{
    axios(url)
    .then(res => dispatch({type:'GET_DENTISTS', payload: res.data}))
  },[])

  useEffect(()=>{
    localStorage.setItem('favs', JSON.stringify(state.favs))
  },[state.favs])

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
export const useGlobalContext = () => useContext(ContextGlobal);
