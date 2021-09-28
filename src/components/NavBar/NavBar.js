import * as React from "react";
import './NavBar.css';
import CartWidget from "./CartWidget";
import Home from "../../pages/Home";
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className='Navbar'>
            <ul className='navBar__menu'>
                <Link className='navBar__item' to='/'>Home</Link>
                <li className='navBar__item'><a className='navBar__a' href="#">Productos</a></li>
                <li className='navBar__item'><a className='navBar__a' href="#">Contacto</a></li>
                <CartWidget />
            </ul>
        </nav>
    );
}

export default NavBar;