import React, { Component } from 'react'
import './Assets/styles/bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';

class App extends Component {
  state = {

  }

  crearNuevaCita = datos => {
    console.log(datos);
  }

  render() {
    return (
      <div className="container">
        <Header
          title='Administrador Pacientes Veterinaria'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita crearNuevaCita={this.crearNuevaCita}/>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
