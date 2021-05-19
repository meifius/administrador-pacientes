import React, { useState } from 'react';

const Formulario = ( ) => {

  const [cita, setCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });

  const [error, setError] = useState( false );

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const formUpdateHandle = ( e ) => {
    setCita( cita =>  ( {...cita, [ e.target.name ]: e.target.value } ) );
  };

  const submitHandle = ( e ) => {
    e.preventDefault();
    console.log('Procesando formulario');
    
    // Validar
    if( 
      mascota.trim() === ''
      || propietario.trim() === ''
      || fecha.trim() === ''
      || hora.trim() === ''
      || sintomas.trim() === ''
    ){
      console.log( 'Error en el formulario' );
      setError( true );
      return;
    }
  };

  return (
    <>
      <h2>Crear Cita</h2>

      { error && <p className='alerta-error'>Todos los campos son obligatorios</p>}

      <form
        onSubmit={ submitHandle }
      >

        <label> Nombre Mascota </label>
        <input 
          type='text'
          name='mascota'
          className='u-full-width'
          placeholder='Nombre Mascota'
          onChange={ formUpdateHandle }
          value={ mascota }
          />

        <label> Nombre Dueño </label>
        <input 
          type='text'
          name='propietario'
          className='u-full-width'
          placeholder='Nombre Dueño'
          onChange={ formUpdateHandle }
          value={ propietario }
          />

        <label> Fecha </label>
        <input 
          type='date'
          name='fecha'
          className='u-full-width'
          onChange={ formUpdateHandle }
          value={ fecha }
          />

        <label> Hora </label>
        <input 
          type='time'
          name='hora'
          className='u-full-width'
          onChange={ formUpdateHandle }
          value={ hora }
          />

        <label> Síntomas </label>
        <textarea 
          className='u-full-width'
          name='sintomas'
          onChange={ formUpdateHandle }
          value={ sintomas }
          >
        </textarea>

        <button
          type='submit'
          className='u-full-width button-primary'
        >
          Agregar Cita
        </button>

      </form>
    </>
  )
}

export default Formulario;
