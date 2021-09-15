import './Card.css';
const Card = ({title, src, description, comprando}) => {
    return (<article className='myCards__article'>
        <h3>{title}</h3>
        <img className='myCards__img' src={src} />
        <p>{description}</p>
        <button onClick={()=> comprando(title)}>Agregar</button>
    </article>
    )
};
export default Card;