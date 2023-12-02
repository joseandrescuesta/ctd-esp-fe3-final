import React from "react";
import {Link} from "react-router-dom"
import { useGlobalContext } from "./utils/global.context";

const Card = ({dentist}) => {
  const {state, dispatch} = useGlobalContext()
  
  const findFav = state.favs.find((fav)=> fav.id == dentist.id)
 
  //console.log(filterFav)
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    if (findFav) {
      const filterFav = state.favs.filter((fav)=> fav.id !== dentist.id)
      // alert('El dentista ya fue agregado a favoritos')      
      dispatch({type: 'DELETE_FAV', payload: filterFav })
    } else {
    dispatch({type:'ADD_FAV', payload: dentist})}
  }
  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={'/detail/' + dentist.id}>
          <img className="image"  src="..\src\images\doctor.jpg" />
        </Link>
          <h4>{dentist.name}</h4>
          <p>user: {dentist.username}</p>

    
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">{findFav? '💙' : '🤍'}</button>
    </div>
  );
};

export default Card;
