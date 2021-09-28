import './Card.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
const Card = ({id, title, src, description, comprando, stock, initial, productId}) => {
    return (<article className='myCards__article' to={id}>
        <h3>{title}</h3>
        <Link to={`/product/${productId}`}>
        <img className='myCards__img' src={src} />
        </Link>
        <p>{description}</p>
        <ItemCount stock={stock} initial={initial}/>
        <button onClick={()=> comprando(id)}>Agregar</button>
    </article>
    )
};
export default Card;