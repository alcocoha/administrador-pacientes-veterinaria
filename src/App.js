import React, { Component } from 'react'
import './Assets/styles/bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component {
  state = {
    citas : []
  }

  componentDidMount(){
    const citasLC = localStorage.getItem('citas');

    if(citasLC){
      this.setState({
        citas: JSON.parse(citasLC)
      });
    }

  }

  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  crearNuevaCita = datos => {
    console.log(datos);
    const citas = [...this.state.citas, datos];
    this.setState({ citas });
  }

  eliminarCita = id => {
    console.log('id---', id);
    const { citas } = this.state;

    // crear una copia del state actual
    const currentCitas = citas;

    // buscar todos los datos diferentes a ese id
    const newCitas = currentCitas.filter( cita => id !== cita.id);

    // actualizar el state
    this.setState({
      citas : newCitas
    });
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
          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas 
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
            />
          </div>
        </div>
      </div>
    )
  }
}


export default App;
