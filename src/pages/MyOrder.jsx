import * as React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getFireStore } from '../firebase';


function MyOrder() {
    const [producto, setProducto] = React.useState();
    const [loading, setLoading] = React.useState(true);

    const { id } = useParams();

    React.useEffect(() => {
        const database = getFireStore();
        const ordCol = database.collection("orders");
        const myOrdCol = ordCol.doc(id);
        myOrdCol
            .get()
            .then((doc) => {
                console.log('esto es: ')
                setProducto({ id: doc.id, ...doc.data() })
                setLoading(false)
            })
            .catch(() => { })
    }, [id])
    return (<>
        {!loading &&
            <div className='finalizacion'>
                <h2>Detalles de compra</h2>
                <p>Nombre: {producto.Buyer.name}</p>
                <p>Telefono: {producto.Buyer.phone}</p>
                <p>Email: {producto.Buyer.email}</p>
                <div>{producto.items.map((res, index) => {
                    return <p key={index}>Item: {res.item}</p>
                })}</div>
                <p>Total: ${producto.total}</p>
                <div>
                    <form>
                        <button type='submit' className='botonSalir btn btn-secondary'>Finalizar</button>
                        <Link to='/productos'>
                        <button type='submit' className='botonSalir btn btn-secondary'>Volver</button>
                        </Link>
                    </form>
                </div>

            </div>}
    </>
    )
}

export default MyOrder