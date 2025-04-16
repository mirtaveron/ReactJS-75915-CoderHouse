import './Item.css'
import { Button } from "@mui/material";
import AddCart from '@mui/icons-material/AddShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/context';

function Item({id, nombre, precio, imagen}){

    const { agregarAlCarrito, contador, stockProductos } = useAppContext();

    return(
        <div className='card'>
            <img src={imagen} alt={nombre} />
            <h2>{nombre || "SIN STOCK"}</h2>
            <h1>${precio || "-"}</h1>        

            <div style={{ display: "flex", gap: "0.5rem" }}>
                <Button disabled={stockProductos[id]===0} variant="contained"  color="info"  onClick={()=>agregarAlCarrito({id, nombre, precio, cantidad: contador})}>
                    <AddCart />
                </Button>
              
                <Link to={`/detalle/${id}`}>
                    <Button variant="contained"  color="info"  >
                        Ver detalle
                    </Button>
                </Link>                
            </div>
        </div>
    )
};

export default Item;