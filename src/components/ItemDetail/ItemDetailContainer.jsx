import * as React from 'react';
import { useParams } from 'react-router';
import { getFireStore } from '../../firebase';
import Card from '../Card/Card';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [prod, setProd] = React.useState([]);
    const { id } = useParams();


    React.useEffect(() => {
        const database = getFireStore();
        const producCol = database.collection('productos');
        const myProduct = producCol.doc(id);
        myProduct.get().then((doc) => {
            if (!doc.exists) {
                console.log('No existe')
            } else {
                console.log(doc)
                setProd({ id: doc.id, ...doc.data() })
            }
        }).catch(() => { })
            .finally(() => { })
    }, [id])
    return (
        <section className='myCards__detail'>
            <Card
                title={prod?.title}
                src={prod?.image}
                description={prod?.description}
                precio={prod?.precio}
                stock={prod?.stock}
                initial={prod?.initial}
                producto={prod}
            />
        </section>
    )
}

export default ItemDetailContainer