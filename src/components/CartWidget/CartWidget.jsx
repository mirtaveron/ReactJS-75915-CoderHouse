import './CartWidget.css';
import { IconButton, Badge } from "@mui/material";
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/context';

function CartWidget(){

    const {carrito} = useAppContext();

    return(
        <>
            <Link to="/cart">
                <IconButton >
                    <Badge badgeContent={carrito.length} color="info" overlap="circular">
                        <CartIcon className='cart-icon' fontSize="large" />
                    </Badge>
                </IconButton>
            </Link>
        </>
    )
}

export default CartWidget;