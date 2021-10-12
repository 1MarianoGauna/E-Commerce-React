/* eslint-disable jsx-a11y/alt-text */
import './Card.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import * as React from 'react';
const Card = ({ id, title, src, description, stock, initial, productId, producto, precio }) => {
    return (<article className='myCards__article' to={id}>
        <h3>{title}</h3>
        <Link to={`/product/${productId}`}>
            <img className='myCards__img' src={src} />
        </Link>
        <p>{description}</p>
        <p>${precio}</p>
        <ItemCount stock={stock} initial={initial} producto={producto} />
    </article>
    )
};
export default Card;