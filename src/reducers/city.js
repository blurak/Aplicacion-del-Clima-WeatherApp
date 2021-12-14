 import { SET_CITY } from "../actions";
 export const city = (state={},action) =>{
     switch (action.type) {
         case SET_CITY:
             return action.value             
     
         default:
            return state     
     }
    
}