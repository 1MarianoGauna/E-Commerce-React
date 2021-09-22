import './Card.css';
import ItemCount from '../ItemCount/ItemCount';
const Card = ({id, title, src, description, comprando, stock, initial}) => {
    return (<article className='myCards__article' to={id}>
        <h3>{title}</h3>
        <img className='myCards__img' src={src} />
        <p>{description}</p>
        <ItemCount stock={stock} initial={initial}/>
        <button onClick={()=> comprando(id)}>Agregar</button>
    </article>
    )
};
export default Card;