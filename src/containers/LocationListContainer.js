import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { setSelectedCity, setWeather} from './../actions/index'
import {getCity, getWeathercities} from  '../reducers'
import LocationList from './../components/LocationList';


 class LocationListContainer extends Component {
     
    componentDidMount(){       
        const{setWeather, setCity ,cities,city }=this.props;
        setWeather(cities) 
        setCity(city)
      
     }
    handleSelectedLocation = city => { 
        console.log("Aqui que va",city)
        this.props.setCity(city);
      }
    render() {
        return (
            console.log("Aqui que va",this.props.citiesWeather),
            <LocationList cities={this.props.citiesWeather} 
            onSelectedLocation={this.handleSelectedLocation} ></LocationList>
        )
    }
}
LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather : PropTypes.array,
    city: PropTypes.string.isRequired
};
const mapDispatchToPropsAction = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities)) 
  });
const  mapStateProps = state => ({
    citiesWeather: getWeathercities(state),
    city: getCity(state)
});
export default connect(mapStateProps,mapDispatchToPropsAction)(LocationListContainer)