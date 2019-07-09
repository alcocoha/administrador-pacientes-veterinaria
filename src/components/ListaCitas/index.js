import React from 'react';
import Cita from './../Cita';

const ListaCitas = ({citas, eliminarCita}) => {
    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">
                    Administrar las citas aquí.
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

export default ListaCitas;