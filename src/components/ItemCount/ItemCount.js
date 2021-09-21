import * as React from 'react';
import react from 'react';
import './ItemCount.css'

function ItemCount({stock, initial}){
    const [count, setCount] = React.useState(initial);
    const sumar =  () => {
        setCount ((prevState) => prevState + 1)
    }
    const restar = () => {
        setCount ((prevState) => prevState - 1)
    }
    if (count > 5){
        setCount ((prevState) => prevState = 5)
    }
    else if(count < 1){
        setCount ((prevState) => prevState = 1)
    }
    return (
        <div className='itemCount'>
            <button onClick={restar} id='myButtonSumar' className='itemCount__suma'>-</button>
            <p>{count}</p>
            <button onClick={sumar} id='myButtonResta' className='itemCount__resta'>+</button>
        </div>
    )
}

export default ItemCount