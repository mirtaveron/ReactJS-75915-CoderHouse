import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemListContainer.css';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebaseConfig';

function ItemListContainer(){
  
    const [misProductos, setMisProductos] = useState([]);
    const [loading, setLoading] = useState(true); 
    const {category} = useParams();
      
    useEffect(() => {
        let productsCollection = collection(db, "react-75915");
        let consulta = productsCollection;
        if (category) {
            let productsCollectionFiltered = query(
                productsCollection,
                where("category", "==", category)
            );
            consulta = productsCollectionFiltered;
        }

        getDocs(consulta).then((res) => {
            let nuevoArray = res.docs.map((elemento) => {
                return { id: elemento.id, ...elemento.data()};
            });
            setMisProductos(nuevoArray);
            setLoading(false);
        });       
    },[category]);
                
   

    return(
        <>         
            <div className='container-cards'>
                {
                    loading ? <Loader/> :                  
                        misProductos.map(el => {
                        return(
                            <Item key={el.id} id={el.id} nombre={el.title} precio={el.price} imagen={el.image}  />
                        )
                    })
                }         
            </div>
        </>
    )

};

export default ItemListContainer;