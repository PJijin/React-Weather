import React, { Component } from 'react';

 const Weather = (props) => {
    return ( 
        <div className="col-sm-2 w-250" >
            <h6 className="mb-4 mt-4 weather-name">{props.details.weather_state_name}     </h6>   
            <p> <img src={`https://www.metaweather.com/static/img/weather/${props.details.weather_state_abbr}.svg`} alt={props.details.weather_state_name} width="30" height="30" />   </p>
            <p className="temp">{props.details.the_temp}<sup>o</sup></p>
            <p className="temp">{props.details.applicable_date}</p>
        </div>
    );
 }

export default Weather;