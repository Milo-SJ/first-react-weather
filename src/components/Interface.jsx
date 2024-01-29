import React, { Component } from "react";

class Interface extends Component {
  state = {};
  render() {
    const { weather } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>Current Weather</h1>
        <p>Location: {weather.name}</p>
        <p>
          Temp: {weather.main.temp}, feels like {weather.main.feels_like}
        </p>
        <p>Weather description: {weather.weather[0].description}</p>
      </div>
    );
  }
}

export default Interface;
