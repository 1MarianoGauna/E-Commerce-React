import React from 'react';
import Card from '../Card/Card';
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer (){
    const comprar = (productId) =>{
        console.log(`Compraste el producto numero ${(productId)}`)
    }
    return (
        <section className='myCards'>
        <Card productId='1' title='Esto es un producto 1' src='./images/imagen1.jpg' description='Esta es la descripción 1' comprando={comprar} stock={5} initial={1}/>
        <Card productId='2' title='Esto es un producto 2' src='./images/imagen1.jpg' description='Esta es la descripción 2' comprando={comprar} stock={5} initial={1}/>
        <Card productId='3' title='Esto es un producto 3' src='./images/imagen1.jpg' description='Esta es la descripción 3' comprando={comprar} stock={5} initial={1}/>
        <Card productId='4' title='Esto es un producto 4' src='./images/imagen1.jpg' description='Esta es la descripción 4' comprando={comprar} stock={5} initial={1}/>
        <Card productId='5' title='Esto es un producto 5' src='./images/imagen1.jpg' description='Esta es la descripción 5' comprando={comprar} stock={5} initial={1}/>
        <Card productId='6' title='Esto es un producto 6' src='./images/imagen1.jpg' description='Esta es la descripción 6' comprando={comprar} stock={5} initial={1}/>
        <Card productId='7' title='Esto es un producto 7' src='./images/imagen1.jpg' description='Esta es la descripción 7' comprando={comprar} stock={5} initial={1}/>
        </section>
    )
}

export default ItemListContainer;