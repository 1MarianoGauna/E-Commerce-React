import * as React from 'react';
import Card from '../Card/Card';

const ItemDetailContainer = () => {
    const [item, setItem] = React.useState([])
    React.useEffect(() => {
        getProductos().then((res) => (setItem(res)))
    }, [])
    const getProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(filtro)
            }, 2000)
        })
    }
    const filtro = miProduct.filter(item => item.id === 2)
    return (
        <section>
            {item?.map((miProduct) => {
                return (
                    <Card
                        key={miProduct.id}
                        title={miProduct.title}
                        src= {miProduct.image}
                        description={miProduct.description}
                        stock={miProduct.stock}
                        initial={miProduct.initial}
                    />
                )
            })}
        </section>
    )
}

export default ItemDetailContainer

const miProduct = [
    {
        id: 1,
        title: 'Cama',
        image: 'https://http2.mlstatic.com/D_NQ_NP_673022-MLA40099587397_122019-O.jpg',
        description: 'Es comoda',
        stock: 3,
        initial: 1
    },
    {
        id: 2,
        title: 'Silla',
        image: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/912/364/products/silla-de-madera-de-pino-rosario-precios-economica1-58b7bd4e6e4d63dd0c16003124101566-640-0.jpg',
        description: 'Es incomoda',
        stock: 9,
        initial: 1
    }
]