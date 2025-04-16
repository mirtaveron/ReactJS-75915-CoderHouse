import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {
    const [carrito, setCarrito] = useState([]);
    const [contador, setContador] = useState(1);
    const [stockProductos, setStockProductos] = useState({});

    const agregarAlCarrito = (producto) => {
        if (carrito.some(el => el.id === producto.id)){
            const newCarrito = carrito.map(el => {
                if (el.id === producto.id){
                    return{
                        ...el,
                        cantidad: el.cantidad + producto.cantidad
                    };
                } else {
                    return el;
                };
            });
            setCarrito(newCarrito);
        } else {
            setCarrito([...carrito, producto]);
        };
        setContador(1);

       // Actualiza el stock globalmente
        setStockProductos(prev => ({
            ...prev,
            [producto.id]: (prev[producto.id] || producto.stockInicial) - producto.cantidad
        }));
    }

    const inicializarStock = (id, stockInicial) => {
        setStocks(prev => ({
            ...prev,
            [id]: stockInicial
        }));
    };

    const limpiarCarrito = () => {
        setCarrito([]);
    };

    const eliminarProducto = (id) => {
        const newCarrito = carrito.filter(el => el.id !== id);
        setCarrito(newCarrito);
    };

    return(
        <AppContext.Provider value={{carrito, agregarAlCarrito, contador, setContador, stockProductos, setStockProductos, limpiarCarrito, eliminarProducto}}>
            {props.children}
        </AppContext.Provider>
    ) 
}
