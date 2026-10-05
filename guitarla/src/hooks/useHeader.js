import { useMemo } from "react";

export function useHeader(cart, onNewCart) {
    const isEmpty = useMemo(() => cart.length === 0, [cart]);
    const total = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart]);

    const itemUpdated = (itemId, newQuantity) => {
        const cartUpdated = cart.map(item => {
            if(item.id === itemId) {
                return { ...item, quantity: newQuantity };
            }
            return item; // Return the item unchanged if it doesn't match the updated item
        });
        onNewCart(cartUpdated);
    }

    const removeItem = (itemId) => {
        const updatedCart = cart.filter(item => item.id !== itemId);
        onNewCart(updatedCart);
    }

    const removeCart = () => {
        onNewCart([]);
    }
    return{
        isEmpty,
        total,
        itemUpdated,
        removeItem,
        removeCart
    };
}