import { useState, useEffect } from 'react';
import { db } from "../data/db.js";

export const useCart = () => {
    const initialStorageCart = () => {
        const localStorageCart = localStorage.getItem('cart'); // Retrieve the cart from localStorage
        return localStorageCart ? JSON.parse(localStorageCart) : [];
    }

    const [data] = useState(db);
    const [cart, setCart] = useState(initialStorageCart);

    const cartUpdated = newCart => {
        setCart([...newCart]);
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    function addToCart(item) {
        const itemExists = cart.findIndex(guitar => guitar.id === item.id);
        if (itemExists >= 0) {
            cart[itemExists].quantity += 1;
            setCart([...cart]);
        } else {
            item.quantity = 1;
            setCart([...cart, item]);
        }
    }

    return {
        cart,
        data,
        addToCart,
        cartUpdated
    }
}