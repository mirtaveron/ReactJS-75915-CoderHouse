import './ItemDetail.css'
import { Button } from "@mui/material";
import AddCart from '@mui/icons-material/AddShoppingCartOutlined';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAPI } from '../../fetchData';
import Loader from '../Loader/Loader';
import { useAppContext } from '../../context/context';
import Contador from '../Contador/Contador';
import { db } from "../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore"; 

function ItemDetail(){

    const {id} = useParams();
    const [detalle, setDetalle] = useState(null);

    const {agregarAlCarrito, contador, stockProductos, setStockProductos} = useAppContext();

    useEffect(() => {
        let refCollection = collection(db, "react-75915");
        let refDoc = doc(refCollection, id);
        getDoc(refDoc).then(res => {
            setDetalle({ id:res.id, ...res.data() });

        })

        // const url = "https://fakestoreapi.com/products";
        // getAPI(url)
        //     .then(response => {
        //         const detalleDelProducto = response.find(el => el.id === parseInt(id));
        //         setDetalle(detalleDelProducto);

        //        // Inicializa el stock si no está
        //         if (stockProductos[detalleDelProducto.id] === undefined) {
        //             const stockInicial = 10 + Number(String(detalleDelProducto.rating.count)[0]);
        //             setStockProductos(prev => ({ ...prev, [detalleDelProducto.id]: stockInicial }));
        //         }
                
        //     })
        //     .catch(err => console.error(err));
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


                <div className="acciones">                    
                    {                    
                        stockProductos[detalle.id] > 0 ?
                            <>
                            <p>Quedan {stockProductos[detalle.id]} unidades</p>
                            <Contador stock={stockProductos[detalle.id]} />
                            </>
                        :
                            <p>Producto agotado!</p>
                    }

                    <Button
                        disabled = {stockProductos[detalle.id]===0}
                        variant="contained"
                        color="info"
                        onClick={()=>agregarAlCarrito({id: detalle.id, nombre: detalle.title, precio: detalle.price, cantidad: contador})}
                        startIcon={<AddCart />}
                    >                       
                    </Button>
                </div>

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