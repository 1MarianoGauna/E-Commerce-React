/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import { CartContext } from "../components/CartContext/CartContext";
import { useContext } from "react";
import './Cart.css';
import { getFireStore } from '../firebase';
import { useHistory } from "react-router";

function Cart() {
    const { cart, deleteItem } = useContext(CartContext);
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const history = useHistory();


    const newOrder = {

        Buyer: { name, phone, email }, items: [
            { item: cart.map((producto) => producto.title), quantity: cart.map((producto) => producto.qty) }
        ],
        total: cart.reduce((a, i) => a + i.precio * i.qty, 0),
    }
    const handleCheckout = (e) => {
        if (name === "" || phone === "" || email === "") {
            console.log('Falta completar un campo!')
        } else {
            e.preventDefault()
            const db = getFireStore();
            const ordersCollections = db.collection("orders");
            ordersCollections
                .add((newOrder))
                .then((docRef) => {
                    console.log('Tu orden es: ', docRef.id)
                    console.log(newOrder)
                    console.log(docRef)
                    history.push(`/myorder/${docRef.id}`)
                })
                .catch((error) => console.log(error))
        }
    }

    if (cart.length === 0) {
        console.log(cart)
        return (<h3>...No hay productos en tu carrito</h3>)
    }
    else {
        console.log(cart)
        return <div className='cartDetails'>
            {cart.map((producto) =>
                <div className='cartDetail__item' key={producto.id}>
                    <h3>{producto.title}</h3>
                    <img className='cartDetail__img' src={producto.image} />
                    <b>{producto.qty}</b>
                    <b>{producto.qty * producto.precio}</b>
                    <button onClick={() => deleteItem(producto)} className="btn btn-danger">Borrar</button>
                </div>)}
            <h3 className='totalCompra'>Total: {cart.reduce((a, i) => a + i.precio * i.qty, 0)}</h3>
            <form className='formFireBase'>
                <div className='formFireBase__children'>
                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Nombre' value={name} required className='formFireBase__item' />
                </div>
                <div className='formFireBase__children'>
                    <input type="number" onChange={(e) => setPhone(e.target.value)} placeholder='Numero de telefono' value={phone} required className='formFireBase__item' />
                </div>
                <div className='formFireBase__children'>
                    <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Escribe tu email' required className='formFireBase__item' />
                </div>
                <div className='button__pedido'>
                    <button onClick={handleCheckout} className='botonSalir btn btn-secondary'>Crear pedido</button>
                </div>
            </form>
        </div>
    }
}
export default Cart