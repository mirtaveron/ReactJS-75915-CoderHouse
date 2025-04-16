import './App.css'
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from './components/ItemDetail/ItemDetail';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { ContextProvider } from './context/context';

function App() {
  return (              
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer /> } />         
          <Route path="/productos/:category" element={<ItemListContainer /> } />
          <Route path="/detalle/:id" element={<ItemDetail /> } />        
          <Route path="/cart" element={<Cart /> } />        
          <Route path="/checkout" element={<Checkout /> } />        
          <Route path="*" element={ <p>404 ROUTE NOT FOUND</p> } />             
        </Routes>
      </BrowserRouter>      
    </ContextProvider>    
  )
};

export default App;
