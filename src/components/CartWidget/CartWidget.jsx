import './CartWidget.css';
import { IconButton, Badge } from "@mui/material";
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';

function CartWidget(){

    return(
        <>
            <IconButton >
                <Badge badgeContent={4} color="info" overlap="circular">
                    <CartIcon className='cart-icon' fontSize="large" />
                </Badge>
            </IconButton>
        </>
    )
}

export default CartWidget;