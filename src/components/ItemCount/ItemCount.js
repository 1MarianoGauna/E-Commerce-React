import * as React from "react";
import './ItemCount.css'
import { Link } from 'react-router-dom';
import { CartContext } from "../CartContext/CartContext";
import { useContext } from "react";

function ItemCount({stock, initial, onAdd, producto}) {
    const [compra, setCompra] = React.useState(false);
    const [count, setCount] = React.useState(1);
    const {addItem} = useContext(CartContext)
    

    const sumar = () => {
        setCount((prevState) => prevState + 1)
    }
    const restar = () => {
        setCount((prevState) => prevState - 1)
    }
    if (count > stock) {
        setCount((prevState) => prevState = stock)
    }
    else if (count < 1) {
        setCount((prevState) => prevState = 1)
    }
    const comprado = (qty) => {
        setCount(count)
        setCompra(true)
        addItem({...producto, qty: count})
    }
    return (
        <div>
            <div className='itemCount'>
                <button onClick={restar} id='myButtonSumar' className='itemCount__suma btn btn-dark'>-</button>
                <h4 className='count'>{count}</h4>
                <button onClick={sumar} id='myButtonResta' className='itemCount__resta btn btn-dark'>+</button>
            </div>
            {!compra ?
                <b onClick={() => comprado()} className='buttonAgregar'>Agregar</b> :
                <Link to={`/cart`} className='buttonA'>
                    <b className='buttonAgregar'>Terminar compra</b>
                </Link>}
        </div>
    )
}

export default ItemCount