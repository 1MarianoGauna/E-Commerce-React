import React from 'react';
import Card from '../Card/Card';

function ItemListContainer (){
    const comprar = (product) =>{
        console.log(`Compraste el producto numero ${product}`)
    }
    return (
        <section className='myCards'>
        <Card title='Esto es un producto 1' src='./images/imagen1.jpg' description='Esta es la descripción 1' comprando={comprar}/>
        <Card title='Esto es un producto 2' src='./images/imagen1.jpg' description='Esta es la descripción 2' comprando={comprar}/>
        <Card title='Esto es un producto 3' src='./images/imagen1.jpg' description='Esta es la descripción 3' comprando={comprar}/>
        </section>
    )
}

export default ItemListContainer;