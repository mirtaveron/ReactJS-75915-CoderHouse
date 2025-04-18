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
            [producto.id]: (prev[producto.id] ?? producto.stockInicial) - producto.cantidad
        }));
    }

    const limpiarCarrito = () => {
        setCarrito([]);
    };

    const eliminarProducto = (id) => {
        const newCarrito = carrito.filter(el => el.id !== id);
        setCarrito(newCarrito);
    };

    const getTotalAmount = () => {
        let total = carrito.reduce((acc, elemento) => {
            return acc + Number(elemento.precio) * (elemento.cantidad);

        }, 0);
    
        return total;
      };

    return(
        <AppContext.Provider value={{carrito, agregarAlCarrito, contador, setContador, stockProductos, setStockProductos, limpiarCarrito, eliminarProducto, getTotalAmount}}>
            {props.children}
        </AppContext.Provider>
    ) 
}
