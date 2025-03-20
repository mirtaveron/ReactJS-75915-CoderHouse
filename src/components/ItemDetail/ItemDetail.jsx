import './ItemDetail.css'
import { Button } from "@mui/material";
import AddCart from '@mui/icons-material/AddShoppingCartOutlined';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAPI } from '../../fetchData';
import Loader from '../Loader/Loader';

function ItemDetail(){

    const {id} = useParams();
    const [detalle, setDetalle] = useState(null);

    function agregarAlCarrito(){
        console.log("Vas a agregar:", detalle.title);
    }

    useEffect(() => {
        const url = "https://fakestoreapi.com/products";
        getAPI(url)
            .then(response => {
                const detalleDelProducto = response.find(el => el.id === parseInt(id));
                setDetalle(detalleDelProducto);
            })
            .catch(err => console.error(err));
    },[id]);

    return(
        !detalle ? <Loader />
        :
        <div className='card-detail'>
            <img src={detalle.image} alt={detalle.title} />

            <div className='info'>
                <h2>{detalle.title || "SIN STOCK"}</h2>
                <div  className="price">${detalle.price || "-"}</div>        
                <p>${detalle.description || "Sin descripción disponible"}</p>        

                <Button variant="contained"  color="info"  onClick={()=>agregarAlCarrito()}>
                    <AddCart />
                </Button>

                <Link to="/">
                    <Button variant="contained"  color="info"  >
                        Volver al inicio                    
                    </Button>
                </Link>
            </div>            

        </div>
    )
};

export default ItemDetail;