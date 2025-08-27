import './App.css'
import Botoncito from './components/Botoncito/Botoncito'
import BotoncitoExtra from './components/Botoncito/BotoncitoExtra'

function App() {

  return (
    <>
      <h1>Botones</h1>
      <Botoncito texto = "Haz click en ti" />
      <Botoncito texto = "Pinchame" textoMensaje = "Me pichaste!"/>
      <Botoncito texto = "Consigue un cachopo" textoMensaje = "Ganaste un cachopo" />
      <Botoncito texto = "Boton extra" backColor="red" textoMensaje = "Pulsaste el extra!" />
      <hr />
      
      <h1>Cards</h1>
    </>
  )
}

export default App
