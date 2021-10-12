import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (producto) => {
        const itsOn = cart.find(x => x.id === producto.id)
        if (itsOn){
            setCart(cart.map(x => x.id === itsOn.id
                ? producto
                : x
                ))
        }else{
            setCart([...cart, producto])
        }

    }
    const deleteItem = (producto) => {
        setCart (cart.filter(x => x.id !== producto.id))
    }

    return <CartContext.Provider value={{cart, addItem, deleteItem}}>
        {children}
    </CartContext.Provider>


}