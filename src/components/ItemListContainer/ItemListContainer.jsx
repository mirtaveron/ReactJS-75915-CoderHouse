import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemListContainer.css';
import { getAPI } from '../../fetchData';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';

<<<<<<< HEAD
=======
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { products } from "../../products";
import { db } from '../../firebaseConfig';



>>>>>>> 1fbc735 (conexión firebase/firestore)
function ItemListContainer(){

    const [todosLosProductos, setTodosLosProductos] = useState([]);
    const [misProductos, setMisProductos] = useState([]);
    const [loading, setLoading] = useState(true);
 
    const {category} = useParams();
      
    useEffect(() => {
<<<<<<< HEAD
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
=======
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

            console.log(nuevoArray);
            setMisProductos(nuevoArray);
            setLoading(false);

        });
        
    //     if (todosLosProductos.length === 0){
    //         const url = "https://fakestoreapi.com/products";
    //         getAPI(url)
    //             .then(response => {
    //                 setTodosLosProductos(response);
    //                 if (category){
    //                     const productosFiltrados = response.filter(el => el.category === category);
    //                     setMisProductos(productosFiltrados);
    //                     setLoading(false);
    //                 } else {                    
    //                     setMisProductos(response);
    //                     setLoading(false);
    //                 };
    //             })
    //             .catch(err => console.error(err));
    //     };
        
    //    if (category){
    //         const productosFiltrados = todosLosProductos.filter(el => el.category === category);
    //         setMisProductos(productosFiltrados);            
    //     } else {                    
    //         setMisProductos(todosLosProductos);            
    //     };

    },[category]);
                
    // const cargarProductos = () => {
    //     let refCollection = collection (db, "react-75915")
    //     products.forEach( (elemento) => {
    //           addDoc(refCollection, elemento)  
    //     });    
    // };  

    return(
        <>         
        {/* <button onClick={cargarProductos}>Cargar muchos productos</button>  */}
>>>>>>> 1fbc735 (conexión firebase/firestore)
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