import './Cart.css';
import { IconButton, Badge } from "@mui/material";
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/context';

function Cart(){

    const {carrito, limpiarCarrito, eliminarProducto} = useAppContext();

    return(
        <div className="cart-container">
        {   carrito.length > 0 ?
            <>
                {
                    carrito.map(el => {
                        return(
                            <div key={el.id} className="cart-item">
                                <p><strong>{el.nombre}</strong></p>
                                <p>${el.precio}</p>
                                <p>Cantidad:{el.cantidad}</p>
                                <p>Subtotal: ${el.cantidad * el.precio}</p>
                                <button onClick={() => eliminarProducto(el.id)}>Eliminar del carrito</button>
                            </div>
                        )
                    })
                }
            
                <p className="total-price">Total: ${carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0)}</p>
               
                <div className="cart-buttons">
                    <button className="limpiar-btn"  onClick={limpiarCarrito}>Limpiar carrito</button>
                    <Link to="/checkout">
                        <button className="finalizar-btn">Finalizar compra</button>
                    </Link>
                </div>
                               
            </>
            :
            <>Carrito vacío</>
            }
        </div>
    )
}

export default Cart;