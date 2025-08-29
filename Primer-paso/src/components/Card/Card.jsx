//Ejercicio básico
/*
import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div class="card">
        <img class="card-img" alt="card-img" src="https://images.theconversation.com/files/246673/original/file-20181121-161621-tvw7sv.jpg?ixlib=rb-4.1.0&rect=0%2C0%2C5550%2C3697&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" />
        <h1 class="card-title">El mar</h1>
        <p class="card-descripcion">En el mar habitan todo tipo de especies submarinas de las que se pueden descubrir en el fondo marino.</p>
    </div>
  )
}

export default Card
*/

//Ejercicio con extras básicos (props)
/*
import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div class="card">
        <img class="card-img" alt={props.altImagen} src={props.dirImagen} />
        <h1 class="card-title">{props.title}</h1>
        <p class="card-descripcion">{props.descripcion}</p>
    </div>
  )
}

export default Card
*/
//Ejercicio con extras intermedios (props, boton de alerta, y color de fondo)

import React from 'react'
import './Card.css'

function handleClick(texto = "Has hecho click!") {
    return alert(texto);
}

const Card = (props) => {
  return (
    <div className="card" style={{ backgroundColor: props.backColor }}>
        <img className="card-img" alt={props.altImagen} src={props.dirImagen} />
        <h1 className="card-title">{props.title}</h1>
        <p className="card-descripcion">{props.descripcion}</p>
        <button className="card-btn" onClick={() => handleClick(props.textoMensaje)}>Información</button>
    </div>
  )
}

export default Card