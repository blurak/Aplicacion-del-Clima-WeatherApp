/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';
const cities = [
    'Buenos Aires,ar',
    'Washington,us',
    'Bogota,co',
    'Mexico,mx',
    'Madrid,es'
  ];

const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick",city);
        onSelectedLocation(city);
    };

    const strToComponent = cities => (
        cities.map( city => 
            (
                console.log("citidentro",city),
                <WeatherLocation 
                    key={city.key} 
                    city={city.name} 
                    onWeatherLocationClick={() => handleWeatherLocationClick(city.name)}
                    data = {city.data} />))
    );

    return (<div className="locationList">
        
        {strToComponent(cities)}
    </div>);
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;