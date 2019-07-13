import React from 'react';
import Cita from './../Cita';
import PropTypes from 'prop-types';

const ListaCitas = ({citas, eliminarCita}) => {

    const mensaje = citas.length === 0 ? "No hay citas" : "Administrar las citas aquí";

    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">
                    { mensaje }
                </h2>
                <div className="lista-citas">
                    {
                        citas.map(cita => (
                            <Cita
                                key={cita.id}
                                data={cita}
                                eliminarCita={eliminarCita}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

ListaCitas.propTypes = {
    citas : PropTypes.array.isRequired,
    eliminarCita : PropTypes.func.isRequired
};

export default ListaCitas;