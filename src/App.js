import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Weather from './Weather';
class App extends Component { 
  state={
    weather: {},
    parent: {},
    details: {title:null}, 
  };

  componentDidMount(){
    // Fetch data from JSON Api 🔥 
    axios.get('https://api.myjson.com/bins/x3iey')
    .then(res => {
      const {consolidated_weather:weather,parent} = res.data;
      const details = {
        title: res.data.title, 
        latt_long: res.data.latt_long,
        type: res.data.location_type,
        tzone: res.data.timezone
      };
      this.setState({ weather , parent, details});
     })
     
  } 

  render() {
    const {details} = this.state;
      return (
      <div className="App">
        <header className="App-header">  
          <h3 className="cityText">{details.title}</h3>
          <div className="details m-2">
          <p>{details.type}</p>
          <p>Timezone: {details.tzone}</p>
          </div>
          <div className="row center">{Object.keys(this.state.weather).map(key => <Weather key={key} index={key} details={this.state.weather[key]} />)}</div>
        </header>
      </div>
    );
  }
}

export default App;
