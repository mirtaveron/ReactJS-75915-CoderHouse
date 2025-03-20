import './App.css'
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {
  return (
    <>          
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer /> } />         
          <Route path="/productos/:category" element={<ItemListContainer /> } />
          <Route path="/detalle/:id" element={<ItemDetail /> } />        
        </Routes>
      </BrowserRouter>      
    </>   
  )
};

export default App;
