import React, { Component } from "react";

import logo from "./logo.svg";

import "./App.css";

class App extends Component {
  state = {
    humor: null,
    loading: false,
    dia: "lunes"
  };

  obtenerHumor = async () => {
    const req = await fetch("http://mihumor.com/humor/" + this.state.dia);
    const humor = await req.text();

    this.setState({ humor });
  };

  render() {
    const { humor, loading } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenido a mi humor según el día</h1>
        </header>
        <div className="App-intro">
          <select
            onChange={event => this.setState({ dia: event.target.value })}
            name="dias"
          >
            <option value="lunes">Lunes</option>
            <option value="miercoles">Miercoles</option>
            <option value="viernes">Viernes</option>
          </select>
          {!!humor && <p>{humor}</p>}
          <button onClick={this.obtenerHumor} disabled={loading}>
            Obtener mi humor
          </button>
        </div>
      </div>
    );
  }
}

export default App;
