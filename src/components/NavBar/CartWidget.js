import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

function CartWidget() {
    const { cart } = React.useContext(CartContext);
    const [element, setElement] = React.useState([]);
    React.useEffect(() => {
        let cantidad = 0
        cart.forEach((elemento)=>{
            cantidad = cantidad + elemento.qty
            setElement(cantidad)
        })
})



    return (
        <Link to='/cart'>
            <i className="fas fa-shopping-cart"></i>
            {
                cart.legth !== 0 && <span>{element}</span>
            }
        </Link>
    )
}

export default CartWidget