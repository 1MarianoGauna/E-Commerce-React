import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

function CartWidget (){
    const {cart} = React.useContext(CartContext);
    return (
        <Link to='/cart'>
        <i className="fas fa-shopping-cart"></i>
        {
            cart.legth !== 0 && <span>{cart.length}</span>
        }
        </Link>
        )
}

export default CartWidget