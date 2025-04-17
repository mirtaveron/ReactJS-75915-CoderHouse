import './Checkout.css';
import { useAppContext  } from '../../context/context';
import { useContext, useState } from 'react';
import { db } from '../../firebaseConfig';
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

function Checkout(){

    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        telefono: ""
    });

    const [orderId, setOrderId] = useState(null);

    const { carrito, getTotalAmount, limpiarCarrito } = useAppContext();


    const modificarInput = (e) => {
        const { value, name }  = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const crearOrden = (e) => {
        e.preventDefault();

        let ordersCollection = collection(db, "orders");

        let totalCompra = getTotalAmount();
        let order = {
            comprador: formData,
            items: carrito,
            total: totalCompra
            
        }

        addDoc(ordersCollection, order).then((res) => {
            setOrderId(res.id);
            limpiarCarrito();
          });

        let productsCollection = collection(db, "react-75915");

        order.items.forEach((product) => {
            let refDoc = doc(productsCollection, product.id);
            updateDoc(refDoc, { stock: product.stock - product.cantidad });
        });
        
    };

    return(
        <div className="checkout-container">
              {orderId ? (
                    <h2>Gracias por tu compra, tu comprobante es: {orderId}</h2>
                ) : (
                    <form className="checkout-form" onSubmit = {crearOrden}>
                        <h2>Finalizar compra</h2>
                        <input type="text" placeholder="Nombre" name="nombre" value={formData.nombre} onChange={modificarInput} required></input>
                        <input type="text" placeholder="Correo" name="correo" value={formData.correo} onChange={modificarInput} required></input>
                        <input type="text" placeholder="Teléfono" name="telefono" value={formData.telefono} onChange={modificarInput} required></input>
                        <input type="submit" className="submit-btn" value="Enviar"></input>
                    </form>        
                )}
        </div>     
    );
};

export default Checkout;