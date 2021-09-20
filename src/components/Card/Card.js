import './Card.css';
import ItemCount from '../ItemCount/ItemCount';
const Card = ({productId, title, src, description, comprando, stock, initial}) => {
    return (<article className='myCards__article' to={productId}>
        <h3>{title}</h3>
        <img className='myCards__img' src={src} />
        <p>{description}</p>
        <ItemCount stock={stock} initial={initial}/>
        <button onClick={()=> comprando(productId)}>Agregar</button>
    </article>
    )
};
export default Card;