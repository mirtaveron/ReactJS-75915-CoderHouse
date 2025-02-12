import Item from '../Item/Item';
import './ItemListContainer.css';

function ItemListContainer({greetings, info}){
    return(
        <>
            <h1>{greetings}</h1>
            <h2>{info}</h2>
            <div className='container-cards'>
            <Item nombre={"Producto 1"} precio={100} />
            <Item />
            <Item nombre={"Producto 3"} precio={240} />
            </div>
        </>
    )

};

export default ItemListContainer;