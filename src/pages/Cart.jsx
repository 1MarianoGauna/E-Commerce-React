import * as React from "react";
import { CartContext } from "../components/CartContext/CartContext";
import { useContext } from "react";

function Cart() {
    const { cart, deleteItem } = useContext(CartContext)
    if (cart.length === 0) {
        return (<h2>...No hay productos en tu carrito</h2>)
    }
    else {
        return <div>
            {cart.map((producto) =>
                <div key={producto.id}>
                    <p>{producto.title}</p>
                    <img src={producto.image} />
                    <p>{producto.qty}</p>
                    <p>{producto.qty * producto.precio}</p>
                    <button onClick={() => deleteItem(producto)}>Borrar</button>
                </div>)}
            <h2>Total: {cart.reduce((a, i) => a + i.precio * i.qty, 0)}</h2>
        </div>
    }
}
export default Cart