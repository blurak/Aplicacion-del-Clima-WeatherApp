import { combineReducers } from "redux";
import { createSelector } from "reselect";
import { cities ,getForcastDataFromCities as _getForcastDataFromCities,
    getWeatherCities as _getWeatherCities } from "./cities";
import { city } from "./city";

export default combineReducers({
    cities,
    city
});
export const getCity = createSelector(state => state.city,city => city)
export const getForcastDataFromCities = createSelector(state => state.cities ,getCity,_getForcastDataFromCities)
export const getWeathercities = createSelector (state => state.cities,_getWeatherCities)