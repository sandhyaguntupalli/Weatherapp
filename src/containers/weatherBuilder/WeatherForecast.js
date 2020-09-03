import React, { Component } from 'react';
import ReactTable from 'react-table-6';
import "react-table-6/react-table.css";

import DisplayCityTime from '../../components/weather/DisplayCityTime';
import DisplayDate from '../../components/weather/DisplayDate';
import DisplayTemperature from '../../components/weather/DisplayTemperature';

class WeatherForecast extends Component{
    render(){
        const data = this.props.foreCastData;
        
        const columns = [
            {
                Header : 'Date',
                accessor: 'Date',
                Cell : props => <span className='date'><DisplayDate>{props.value}</DisplayDate></span>
            },
            {
                Header : 'Time',
                accessor: 'Time',
                Cell : props => <span className='number'><DisplayCityTime>{props.value}</DisplayCityTime></span>
            },
            {
                Header : 'Temperature',
                accessor: 'temprature',
                Cell : props => <span className='number'><DisplayTemperature>{props.value}</DisplayTemperature></span>
            },
            {
                Header : 'Feels Like',
                accessor: 'feels',
                Cell : props => <span className='number'>{props.value + String.fromCharCode(176)}</span>
            }
        ]


        return (
            <div>
                <ReactTable data={data} columns={columns} showPagination={false} pageSize={5} />
            </div>
        )
    }
}

export default WeatherForecast;