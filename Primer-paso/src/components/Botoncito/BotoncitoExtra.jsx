import React from 'react'
import './Botoncito.css'

//Función onClick que muestra un mensaje en consola
const muestraMensaje = () => {
    return console.log('Se ha pinchado el botón!');
}

const BotoncitoExtra = (props) => {
  return (
    <div>
        <button style={{backgroundColor: props.backColor }} onClick={muestraMensaje}>Soy un extra</button>
    </div>
  )
}

export default BotoncitoExtra