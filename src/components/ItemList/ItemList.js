import * as React from 'react';
import Card from '../Card/Card';

const ItemList = () =>{
    const comprar = (id) => {
        console.log(`Compraste el producto numero ${(id)}`)
    }
    const [prod, setProd] = React.useState([]);
    React.useEffect(() => {
        getProducts().then((result) => setProd(result))
    }, [])
    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
    }

    return(
        <section className='myCards'>
        {prod?.map((producto) => {
            return (
                <Card
                    key={producto.id}
                    title={producto.title}
                    src={producto.image}
                    description={producto.description}
                    comprando={comprar}
                    stock={producto.stock}
                    initial={producto.initial}
                />
            );
        })}
    </section>

    )
}
export default ItemList
const productos = [
    {
        id: 0,
        title: 'Esto es un producto 0',
        image: './images/imagen1.jpg',
        description: 'Esta es la descripcion 0',
        stock: 9,
        initial: 1
    },
    {
        id: 1,
        title: 'Esto es un producto 1',
        image: './images/imagen1.jpg',
        description: 'Esta es la descripcion 1',
        stock: 8,
        initial: 1
    },
    {
        id: 2,
        title: 'Esto es un producto 2',
        image: './images/imagen1.jpg',
        description: 'Esta es la descripcion 2',
        stock: 2,
        initial: 1
    },
    {
        id: 3,
        title: 'Esto es un producto 3',
        image: './images/imagen1.jpg',
        description: 'Esta es la descripcion 3',
        stock: 5,
        initial: 1
    },
    {
        id: 4,
        title: 'Esto es un producto 4',
        image: './images/imagen1.jpg',
        description: 'Esta es la descripcion 4',
        stock: 3,
        initial: 1
    },
    {
        id: 5,
        title: 'Esto es un producto 5',
        image: './images/imagen1.jpg',
        description: 'Esta es la descripcion 5',
        stock: 4,
        initial: 1
    },
    {
        id: 6,
        title: 'Esto es un producto 6',
        image: './images/imagen1.jpg',
        description: 'Esta es la descripcion 6',
        stock: 6,
        initial: 1
    },
]