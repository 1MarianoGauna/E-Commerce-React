import * as React from "react";
import './ItemCount.css'
import { Link } from 'react-router-dom';
import { CartContext } from "../CartContext/CartContext";
import { useContext } from "react";

function ItemCount({stock, initial, onAdd}) {
    const [compra, setCompra] = React.useState(false);
    const [count, setCount] = React.useState(initial);
    const {addItem, cart} = useContext(CartContext)
    

    const sumar = () => {
        setCount((prevState) => prevState + 1)
    }
    const restar = () => {
        setCount((prevState) => prevState - 1)
    }
    if (count > stock) {
        setCount((prevState) => prevState = stock)
    }
    else if (count < initial) {
        setCount((prevState) => prevState = initial)
    }
    const comprado = () => {
        setCount(count)
        setCompra(true)
        addItem()
    }
    return (
        <div>
            <div className='itemCount'>
                <button onClick={restar} id='myButtonSumar' className='itemCount__suma'>-</button>
                <p>{count}</p>
                <button onClick={sumar} id='myButtonResta' className='itemCount__resta'>+</button>
            </div>
            {!compra ?
                <button onClick={() => comprado()}>Agregar</button> :
                <Link to={`/cart`}>
                    <button>Continuar</button>
                </Link>}
        </div>
    )
}

export default ItemCount