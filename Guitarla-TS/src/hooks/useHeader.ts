import { useMemo } from "react";
import type { CartItem } from "../types/index.ts";

type UseHeaderProps = {
    cart: CartItem[];
    onNewCart: (newCart: CartItem[]) => void;
};

export function useHeader({ cart, onNewCart }: UseHeaderProps) {
    const isEmpty = useMemo(() => cart.length === 0, [cart]);
    const total = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart]);

    const itemUpdated = (updatedItem: CartItem) => {
        const cartUpdated = cart.map(item => {
            if(item.id === updatedItem.id) {
                return updatedItem; // Return the updated item if it matches the updated item
            }
            return item; // Return the item unchanged if it doesn't match the updated item
        });
        onNewCart(cartUpdated);
    }

    const removeItem = (itemId: CartItem['id']) => {
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