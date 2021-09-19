import React from "react";
import './NavBar.css';
import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <nav className='Navbar'>
            <ul className='navBar__menu'>
                <li className='navBar__item'><a className='navBar__a' href="#">Home</a></li>
                <li className='navBar__item'><a className='navBar__a' href="#">Productos</a></li>
                <li className='navBar__item'><a className='navBar__a' href="#">Contacto</a></li>
                <CartWidget />
            </ul>
        </nav>
    );
}

export default NavBar;