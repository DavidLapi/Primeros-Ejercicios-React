import './App.css'
import Botoncito from './components/Botoncito/Botoncito'
import Card from './components/Card/Card'

function App() {

  return (
    <>
      <h1>Botones</h1>
      <Botoncito texto = "Haz click aquí" />
      <Botoncito texto = "Pinchame" textoMensaje = "Me pichaste!"/>
      <Botoncito texto = "Consigue un cachopo" textoMensaje = "Ganaste un cachopo" />
      <Botoncito texto = "Boton extra" backColor="blue" textoMensaje = "Pulsaste el extra!" />
      <hr />
      
      <h1>Cards</h1>
      <Card 
        title = "El mar" 
        altImagen = "El mar" 
        dirImagen = "https://images.theconversation.com/files/246673/original/file-20181121-161621-tvw7sv.jpg?ixlib=rb-4.1.0&rect=0%2C0%2C5550%2C3697&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" 
        descripcion = "En el mar habitan todo tipo de especies submarinas de las que se pueden descubrir en el fondo marino."
      />
      <Card 
        title = "El paisaje"
        altImagen = "El paisaje"
        dirImagen = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeFsqiCZ9dqC9CCNb3vqhLOyWcdU0PV0UtYiVs_PuanxtUaGsDxcL-1nJdA2zTY2tztBPzup8mp4ZejXZkIs0ZioYBVYGxk8E8XLxUhmSJIKYgKWbIMutaH0uDYJfvdnpNJn_gXTyGJJ0/w1200-h630-p-k-no-nu/02273+paisajes01.jpg"
        descripcion = "Se puede apreciar una hermosa imagen de un paisaje que tiene un lago y unos cuantos árboles."/>
      <Card 
        title = "El cachopo"
        altImagen = "El cachopo"
        dirImagen = "https://asturcachopo.wordpress.com/wp-content/uploads/2011/10/dsc00338.jpg?w=640"
        descripcion = "Con el fin de degustar un magnífico cachopo, hemos visitado el restaurante 'Los Manjares' situado en Solís, en el concejo de Corvera de Asturias, a 30 min de Oviedo y Gijón. Nos habían comentado la calidad de este cachopo, que aun llevando altas expectativas, no nos defraudó."
      />
    </>
  )
}

export default App
