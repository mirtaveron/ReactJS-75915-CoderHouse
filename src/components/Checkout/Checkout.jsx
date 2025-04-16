import './Checkout.css';
import { IconButton, Badge } from "@mui/material";
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/context';
import { useState } from 'react';

function Checkout(){

    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        telefono: ""
    })

    const modificarInput = (e) => {
        const { value, name }  = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const crearOrden = (e) => {
        e.preventDefault();
        console.log("Orden creada", formData);
        setFormData({
            nombre:"",
            correo:"",
            telefono:""
        })
    };

    return(
        <div className="checkout-container">
            <form className="checkout-form" onSubmit = {crearOrden}>
                <h2>Finalizar compra</h2>
                <input type="text" placeholder="Nombre" name="nombre" value={formData.nombre} onChange={modificarInput} required></input>
                <input type="text" placeholder="Correo" name="correo" value={formData.correo} onChange={modificarInput} required></input>
                <input type="text" placeholder="Teléfono" name="telefono" value={formData.telefono} onChange={modificarInput} required></input>
                <input type="submit" className="submit-btn" value="Enviar"></input>
            </form>        
        </div>     
    );
};

export default Checkout;