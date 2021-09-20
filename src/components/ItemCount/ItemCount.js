import * as React from 'react';
import './ItemCount.css'

function ItemCount({stock, initial}){
    const [count, setCount] = React.useState(1);
    const sumar =  () => {
        setCount ((prevResult) => prevResult + 1)
    }
    const restar = () => {
        setCount ((prevResult) => prevResult - 1)
    }
    return (
        <div className='itemCount'>
            <button onClick={restar} className='itemCount__suma'>-</button>
            <p>{count}</p>
            <button onClick={sumar} className='itemCount__resta'>+</button>
        </div>
    )
}

export default ItemCount