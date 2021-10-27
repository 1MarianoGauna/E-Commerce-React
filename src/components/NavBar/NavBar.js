/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import './NavBar.css';
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <header>
            <h2>Tienda Electronica</h2>
            <nav className='Navbar'>
                <ul className='navBar__menu'>
                    <Link className='navBar__item' to='/'>Home</Link>
                    <Link className='navBar__item' to='/productos'>Productos</Link>
                    <Link className='navBar__item' to='/contacto'>Contacto</Link>
                    <li className='navBar__item'><CartWidget className='navBar__a' /></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;