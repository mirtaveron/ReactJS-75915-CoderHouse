import './Item.css'
import { Button } from "@mui/material";
import AddCart from '@mui/icons-material/AddShoppingCartOutlined';

function Item({nombre, precio}){

    function agregarAlCarrito(){
        console.log("Vas a agregar:", nombre);
    }

    return(
        <div className='card'>
            <h2>{nombre || "SIN STOCK"}</h2>
            <h1>${precio || "-"}</h1>        

            <Button variant="contained"  color="info"  onClick={()=>agregarAlCarrito()}>
                <AddCart />
            </Button>
        </div>
    )
};

export default Item;