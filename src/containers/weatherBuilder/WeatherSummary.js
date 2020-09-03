import React, {Component} from 'react';
import {connect} from 'react-redux';

import Button from '../../components/UI/Button';
import weatherData from '../../service/WeatherData';
import WeatherForecast from './WeatherForecast';

class WeatherSummary extends Component{

    state ={
        weatherData : [],
        stateVal : null,
        currentWeatherDetails : null,
        isForecastClicked : false,
        foreCastDataDetails : []
    }

    componentDidMount(){
        this.fetchCityWeather(String(this.props.city), weatherData.States);
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.city !== prevProps.city){
            this.fetchCityWeather(String(this.props.city), weatherData.States);
            this.setState(() => {
                return {isForecastClicked : false}
            })
        }
    }

    fetchCityWeather = (cityName, weatherData) => {
        const cityWeather = []
        for(let state in weatherData){
            cityWeather.push( ...(weatherData[state]).cities.filter((city) => (city.name).toLowerCase() === cityName.trim().toLowerCase()));
            if(cityWeather.length > 0){
                this.setState(() => {
                    return {stateVal : state}
                })
                break;
            }
        }
        if(cityWeather.length > 0){
            const currentWeatherDet = cityWeather[0].forecast[0];
            this.setState(() => {
                return {currentWeatherDetails : currentWeatherDet, 
                        foreCastDataDetails: cityWeather[0].forecast
                }
            })
        }
    }

    viewForecast = () => {
        this.setState(() => {
            return {isForecastClicked : true}
        })
        this.props.getForeCastData(this.state.foreCastDataDetails);
    }

    render() { 
        let summaryDetails = <div>
                                <h1>Please enter valid city</h1>
                            </div>
        if(this.state.currentWeatherDetails){
            summaryDetails =  <div>
                                    <h1>{this.props.city}, {this.state.stateVal}</h1>
                                    <p>
                                        {new Date(this.state.currentWeatherDetails.Date).toLocaleDateString("default", {weekday: 'long'})} {this.state.currentWeatherDetails.Time} 
                                        <br/>
                                        {this.state.currentWeatherDetails.temprature + String.fromCharCode(176)}
                                        <br/>
                                        Feels like {this.state.currentWeatherDetails.feels + String.fromCharCode(176)}
                                    </p>
                                    <Button clicked={this.viewForecast}>View 5 day forecast</Button>
                                </div>  
        }

        let foreCastData = "";
        if(this.state.isForecastClicked){
            foreCastData = <WeatherForecast foreCastData={this.props.foreCastData}/>
        }
        
        return (
            <div>
            {summaryDetails}
            {foreCastData}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        foreCastData : state.foreCastDetails
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getForeCastData : (foreCastData) => dispatch({type : 'FETCHDATA', foreCast : foreCastData})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherSummary);