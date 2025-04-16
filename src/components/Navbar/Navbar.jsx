import './Navbar.css';
import logo from "../../assets/iconos/logo-tienda-express.png"; 
import { IconButton } from "@mui/material";
import Products from '@mui/icons-material/StoreOutlined';
import MaleIcon from '@mui/icons-material/MaleOutlined';
import FemaleIcon from '@mui/icons-material/Female';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/context';

function Navbar(){

    const context = useAppContext();

    return(
        <header>
            <nav className="nav-bar">
                <img src={logo} className='logo'/>

                <ul className='nav-bar-options'>
                    <li className='nav-bar-item'>
                        <IconButton >
                            <Products  className='menu-icon'/>
                        </IconButton><Link to="/">Productos</Link></li>
                    <li className='nav-bar-item'>
                        <IconButton >
                            <MaleIcon className='menu-icon'/>
                        </IconButton><Link to="/productos/men's clothing">Ropa masculina</Link></li>
                    <li className='nav-bar-item'>
                        <IconButton >
                            <FemaleIcon className='menu-icon'/>
                        </IconButton><Link to="/productos/women's clothing">Ropa femenina</Link></li>
                </ul>

                <CartWidget />      
            
            </nav>
        </header> 
    )
};

export default Navbar;