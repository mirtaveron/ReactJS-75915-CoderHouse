import './Navbar.css';
import logo from "../../assets/iconos/logo-tienda-express.png"; 
import { IconButton } from "@mui/material";
import Home from '@mui/icons-material/HomeOutlined';
import Products from '@mui/icons-material/StoreOutlined';
import Contact from '@mui/icons-material/ContactPhoneOutlined';

import CartWidget from '../CartWidget/CartWidget';

function Navbar(){

    return(
        <header>
        <nav className="nav-bar">
            <img src={logo} className='logo'/>

            <ul className='nav-bar-options'>
                <li className='nav-bar-item'>
                    <IconButton >
                        <Home  className='menu-icon'/>
                    </IconButton>Inicio</li>
                <li className='nav-bar-item'>
                    <IconButton >
                        <Products  className='menu-icon'/>
                    </IconButton>Productos</li>
                <li className='nav-bar-item'>
                    <IconButton >
                        <Contact  className='menu-icon'/>
                    </IconButton>Contacto</li>
            </ul>

            <CartWidget />      
          
        </nav>
        </header> 
    )
};

export default Navbar;