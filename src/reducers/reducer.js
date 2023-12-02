export const reducer = (state, action) =>{
    switch(action.type){
        case 'GET_DENTISTS':
            return{...state, list: action.payload}
        case 'ADD_FAV':
            return{...state, favs: [...state.favs, action.payload]}
        case 'CHANGE_THEME':
            return{...state, theme: action.payload}
        case 'GET_DENTIST':
            return{}
        case 'DELETE_FAV':
            return{...state, favs: action.payload}
    }

}