import './ItemDetail.css'
import { Button } from "@mui/material";
import AddCart from '@mui/icons-material/AddShoppingCartOutlined';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
        const getItem = async () => {
            try {

        let refCollection = collection(db, "react-75915");
        let refDoc = doc(refCollection, id);

        const snapshot = await getDoc(refDoc);

        if (snapshot.exists()) {
            const data = snapshot.data();
            setDetalle({ id: snapshot.id, ...data });
        } else {
            setDetalle(null); // no existe ese producto
        }


        // getDoc(refDoc).then(res => {
        //     setDetalle({ id:res.id, ...res.data() });
        //     console.log(detalle.stock);
        // })  
    } catch (error) {
        console.error("Error al obtener producto:", error);
    } finally {
        // setLoader(false);
    }
};


getItem();
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
                        detalle.stock > 0 ?
                            <>
                            <p>Quedan {detalle.stock} unidades</p>
                            <Contador stock={detalle.stock} />
                            </>
                        :
                            <p>Producto agotado!</p>
                    }

                    <Button
                        disabled = {detalle.stock===0}
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