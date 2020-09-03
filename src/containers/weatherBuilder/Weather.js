import React from 'react';

import WeatherInput from '../../components/weather/WeatherInput';
import WeatherSummary from './WeatherSummary';

class WeatherApp extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          city: "",
          isCityAvailable : false,
          isSubmitClicked : false
      }
    }

    handleInputChange = (event) => {
        this.setState({city : event.target.value, isSubmitClicked : false});
    }

    submitData = (event) => {
        event.preventDefault();
        this.setState({isCityAvailable : true, isSubmitClicked : true});
    }
    
    render() {
        let weatherSummary = "";
        if(this.state.isCityAvailable && this.state.isSubmitClicked){
            weatherSummary = (
                <WeatherSummary city={this.state.city}/>
            )
        }
      return (
        <div>
            <WeatherInput formSubmit = {this.submitData} cityChanged = {this.handleInputChange}/>
            {weatherSummary}
        </div>
      )
    }
  }
  
  export default WeatherApp;
  