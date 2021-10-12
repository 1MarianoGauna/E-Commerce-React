import * as React from 'react';
import { useParams } from 'react-router';
import Card from '../Card/Card';

const ItemDetailContainer = () => {
    const [prod, setProd] = React.useState([]);
    const { id } = useParams();

    React.useEffect(() => {
        getProducts().then((result) => setProd(result))
    }, [])
    const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(filtro)
            }, 2000)
        })
    }
    const filtro = productos.filter(prod => prod.id == id)
    return (
        <section className='myCards'>
            {prod?.map((producto) => {
                return (
                    <div key={producto.id}>
                        <Card
                            key={producto.id}
                            title={producto.title}
                            productId={producto.id}
                            src={producto.image}
                            description={producto.description}
                            precio={producto.precio}
                            stock={producto.stock}
                            initial={producto.initial}
                            producto={producto}
                        />
                    </div>
                );
            })}
        </section>
    )
}

export default ItemDetailContainer

const productos = [
    {
        id: 0,
        title: 'Esto es un producto 0',
        image: '/images/imagen1.jpg',
        description: 'Esta es la descripcion 0',
        precio: 5000,
        stock: 9,
        initial: 1
    },
    {
        id: 1,
        title: 'Esto es un producto 1',
        image: '/images/imagen1.jpg',
        description: 'Esta es la descripcion 1',
        precio: 5000,
        stock: 8,
        initial: 1
    },
    {
        id: 2,
        title: 'Esto es un producto 2',
        image: '/images/imagen1.jpg',
        description: 'Esta es la descripcion 2',
        precio: 5000,
        stock: 2,
        initial: 1
    },
    {
        id: 3,
        title: 'Esto es un producto 3',
        image: '/images/imagen1.jpg',
        description: 'Esta es la descripcion 3',
        precio: 5000,
        stock: 5,
        initial: 1
    },
    {
        id: 4,
        title: 'Esto es un producto 4',
        image: '/images/imagen1.jpg',
        description: 'Esta es la descripcion 4',
        precio: 5000,
        stock: 3,
        initial: 1
    },
    {
        id: 5,
        title: 'Esto es un producto 5',
        image: '/images/imagen1.jpg',
        description: 'Esta es la descripcion 5',
        precio: 5000,
        stock: 4,
        initial: 1
    },
    {
        id: 6,
        title: 'Esto es un producto 6',
        image: '/images/imagen1.jpg',
        description: 'Esta es la descripcion 6',
        precio: 5000,
        stock: 6,
        initial: 1
    },
]