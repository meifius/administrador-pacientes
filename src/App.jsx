import { useEffect, useState } from "react";
import Cita from "./components/Cita";

import Formulario from "./components/Formulario";

function App( ) {
  const [citas, setCitas] = useState( [ ] );

  useEffect( ( ) => {
    const initialState = localStorage.getItem( 'citas' );
    initialState !== '' ?  setCitas( JSON.parse( localStorage.getItem( 'citas' ) ) ) : setCitas( [] );
  }, [ ] );

  useEffect( ( ) => {
    localStorage.setItem( 'citas', JSON.stringify( citas ) );
  }, [ citas ]);
  
  const crearCita = ( cita ) => {
    setCitas( citas => [
      ...citas,
      cita
    ]);
  }

  const eliminarCita = ( id ) => {
    setCitas( citas => citas.filter( cita => cita.id !== id ))
  }

  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <>
      <h1>Administrador de Pacientes</h1>

      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario
              setCitas={ crearCita }
            />
          </div>
          
          <div className='one-half column'>
            <h2>{ titulo }</h2>
            <ul>
              {
                citas.map( cita => 
                  <Cita 
                    key={ cita.id } 
                    cita={ cita } 
                    eliminarCita={ eliminarCita }
                  /> 
                )
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
