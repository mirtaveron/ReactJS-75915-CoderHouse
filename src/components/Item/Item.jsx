import './Item.css'
import { Button } from "@mui/material";
import AddCart from '@mui/icons-material/AddShoppingCartOutlined';
import { Link } from 'react-router-dom';

function Item({id, nombre, precio, imagen}){

    function agregarAlCarrito(){
        console.log("Vas a agregar:", nombre);
    }

    return(
        <div className='card'>
            <img src={imagen} alt={nombre} />
            <h2>{nombre || "SIN STOCK"}</h2>
            <h1>${precio || "-"}</h1>        

            <div style={{ display: "flex", gap: "0.5rem" }}>
                <Button variant="contained"  color="info"  onClick={()=>agregarAlCarrito()}>
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