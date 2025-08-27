//Ejercicio básico
/*
import React from 'react'
import "./Botoncito.css" <-- Importamos el archivo css con Botoncito 

const Botoncito = () => {
  return (
    <div>
        <button>Haz click aquí</button>
    </div>
  )
}

export default Botoncito
*/

// Ejercicio con extras básicos (props)
/*
import React from 'react'
import "./Botoncito.css"

const Botoncito = (props) => {
  return (
    <div>
        <button>{props.texto}</button>
    </div>
  )
}

export default Botoncito
*/

// Ejercicio con extras intermedios (props, onClick y color de boton)
import React from 'react'
import "./Botoncito.css"
//Función onClick que muestra un mensaje en consola
const muestraMensaje = (texto = "Has pinchado un botón") => {
    return console.log(texto);
}

const Botoncito = (props) => {
  return (
    <div>
        <button 
            style={{backgroundColor: props.backColor }}
            onClick={() => muestraMensaje(props.textoMensaje)}>
                {props.texto}
        </button>
    </div>
  )
}

export default Botoncito;