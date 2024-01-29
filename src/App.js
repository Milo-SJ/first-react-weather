import React, { Component } from "react";
import Interface from "./components/Interface";
import Spinner from "./components/Spinner";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=a2fea60601d0d1dd4349917d7c3b89e2`
    );

    this.setState({ weather: data });
  }

  render() {
    console.log(this.state);
    return this.state.weather ? (
      <Interface weather={this.state.weather} />
    ) : (
      <Spinner />
    );
  }
}

export default App;
