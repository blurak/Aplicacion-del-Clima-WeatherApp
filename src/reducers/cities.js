import { SET_FORECAST_DATA, GET_WEATHER_CITY, SET_WEATHER_CITY} from "../actions";
import { toPairs } from "lodash";
import { createSelector } from "reselect";

export const cities = (state={},action) =>{
    switch (action.type) {
        case SET_FORECAST_DATA:{
            const {city, forecastData} = action.payload
            return {...state,[city]: {...state[city],forecastData, forecastDataDate : new Date()}} ;       
        }
        case SET_WEATHER_CITY:{
            const {city, weather} = action.payload
            console.log ("entro y seteo ",action.payload)
            return {...state,[city]: {...state[city],weather}};             
        }
        case GET_WEATHER_CITY:{
            const city = action.payload
            console.log("aqui que viene ",city)
            return {...state,[city]: {...state[city],weather: null}};            
        }
        
        default:
           return state ;  
    }
   
}
export const getForcastDataFromCities =
 createSelector((state,city) =>state[city] && state[city].forecastData, forecastData =>forecastData);
 const fromObjToArray = cities =>(toPairs(cities).map(([key,value])=>({key,name:key,data: value.weather})))
 export const getWeatherCities =
 createSelector(state => fromObjToArray(state),cities => cities);