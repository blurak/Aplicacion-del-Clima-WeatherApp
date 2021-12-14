import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getCity, getForcastDataFromCities} from '../reducers'
import ForcastExtended from '../components/ForecastExtended'

 class ForcastExtendedContainer extends Component {   

    render() {
        const {city,forecastData} = this.props
        return (
            city &&
            <ForcastExtended city={city} forecastData={forecastData}/>
        )
    }
}
ForcastExtendedContainer.propTypes ={
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};
const mapStateToProps = state  =>({city:getCity(state),forecastData:getForcastDataFromCities(state)});
export default connect (mapStateToProps,null)(ForcastExtendedContainer)