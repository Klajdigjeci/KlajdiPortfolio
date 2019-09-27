import { combineReducers } from 'redux';

const navigationReducer = (state= "",action) =>{
    if(action.type === "GET_NAVIGATION"){
        return action.payload
    }
    return state
}

 export default combineReducers({
     navigate: navigationReducer
 })
