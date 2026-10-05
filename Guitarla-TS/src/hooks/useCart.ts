import { useState, useEffect } from 'react';
import { db } from "../data/db.js";
import type { Guitar, CartItem } from "../types/index.ts";

export const useCart = () => {
    const initialStorageCart = () : CartItem[] => {
        const localStorageCart = localStorage.getItem('cart'); // Retrieve the cart from localStorage
        return localStorageCart ? JSON.parse(localStorageCart) : [];
    }

    const [data] = useState(db);
    const [cart, setCart] = useState(initialStorageCart);

    const cartUpdated = (newCart : CartItem[]) => {
        setCart([...newCart]);
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    function addToCart(item : Guitar) {
        const itemExists = cart.findIndex(guitar => guitar.id === item.id);
        if (itemExists >= 0) {
            const updatedCart = [...cart];
            updatedCart[itemExists].quantity += 1;
            setCart(updatedCart);
        } else {
            const newItem: CartItem = { ...item, quantity: 1 };
            setCart([...cart, newItem]);
        }
    }

    return {
        cart,
        data,
        addToCart,
        cartUpdated
    }
}