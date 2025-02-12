import './App.css'
//import { Home } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Home from '@mui/icons-material/HomeOutlined';
import Cart from '@mui/icons-material/ShoppingCartOutlined';

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
