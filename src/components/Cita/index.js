import React from 'react';

const Cita = ({data, eliminarCita}) => {
    return (
        <div className="media mt-3">
            <div className="media-body">
                <h3 className="mt-0">{ data.mascota }</h3>
                <p className="card-text"><span>Hora: </span>{ data.hora }</p>
                <p className="card-text"><span>Fecha: </span>{ data.fecha }</p>
                <p className="card-text"><span>Sintomas: </span>{ data.sintomas }</p>
                <p className="card-text"><span>Dueño: </span>{ data.propietario }</p>
                
                <button 
                    className="btn btn-danger"
                    onClick={() => eliminarCita(data.id)}>
                    Eliminar &times;
                </button>
            </div>
        </div>
    );
};

export default Cita;