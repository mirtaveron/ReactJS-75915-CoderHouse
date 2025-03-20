import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemListContainer.css';
import { getAPI } from '../../fetchData';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';

function ItemListContainer(){

    const [todosLosProductos, setTodosLosProductos] = useState([]);
    const [misProductos, setMisProductos] = useState([]);
    const [loading, setLoading] = useState(true);
 
    const {category} = useParams();
      
    useEffect(() => {
        if (todosLosProductos.length === 0){
            const url = "https://fakestoreapi.com/products";
            getAPI(url)
                .then(response => {
                    setTodosLosProductos(response);
                    if (category){
                        const productosFiltrados = response.filter(el => el.category === category);
                        setMisProductos(productosFiltrados);
                        setLoading(false);
                    } else {                    
                        setMisProductos(response);
                        setLoading(false);
                    };
                })
                .catch(err => console.error(err));
        };
        
       if (category){
            const productosFiltrados = todosLosProductos.filter(el => el.category === category);
            setMisProductos(productosFiltrados);            
        } else {                    
            setMisProductos(todosLosProductos);            
        };

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