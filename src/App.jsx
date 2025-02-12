import './App.css'
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>      
      <Navbar />
      <ItemListContainer greetings="¡Bienvenido a TiendaExpress!" info="Tenemos lo que necesitas, al mejor precio y con envíos rápidos. ¡Explora y encuentra tu próximo favorito!" />
    </>   
  )
};

export default App;
