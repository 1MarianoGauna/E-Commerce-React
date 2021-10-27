import * as React from 'react';
import './NavFooter.css'


function NavFooter(){
    return <footer>
        <nav>
            <ul className='navFooter'>
                <li className='navFooter__item'><a className='navFooter__link' href="https://github.com/1MarianoGauna" target='_BLANK' rel="noreferrer"><i className="fab fa-github"></i></a></li>
                <li className='navFooter__item'><a className='navFooter__link' href="https://www.linkedin.com/in/mariano-gauna-98a0b6211/"><i className="fab fa-linkedin" target='_BLANK'></i></a></li>
                <li className='navFooter__item'><a className='navFooter__link' href="https://twitter.com/1marianogauna" target="_BLANK" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
            </ul>
        </nav>
    </footer>
}

export default NavFooter