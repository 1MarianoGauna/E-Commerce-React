/* eslint-disable no-unused-vars */
import * as React from 'react';
import { getFireStore } from '../../firebase';
import Card from '../Card/Card';
import './ItemList.css'

const ItemList = () => {
    const [prod, setProd] = React.useState([]);
    const [error, setError] = React.useState(null)
    React.useEffect(() => {
        const db = getFireStore();
        const producCol = db.collection('productos');
        producCol
            .get()
            .then((querySnapshot) => { if(querySnapshot.empty){
                console.log('No hay productos ')
            }else{
                setProd(querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            }})
            .catch((error) => setError(error))

    }, []);
    return (
        <section className='myCards'>
            {prod?.map((producto) => {
                return (
                    <Card
                        key={producto.id}
                        productId={producto.id}
                        title={producto.title}
                        src={producto.image}
                        description={producto.description}
                        precio={producto.precio}
                        stock={producto.stock}
                        initial={producto.initial}
                        producto={producto}
                    />
                );
            })}
        </section>

    )
}
export default ItemList