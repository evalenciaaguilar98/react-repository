import type { CartItem } from "../types/index.ts";

type UseItemCartProps = {
    item: CartItem;
    onUpdatedItem: (updatedItem: CartItem) => void;
    onRemoveItem: (itemId: CartItem['id']) => void;
};

export function useItemCart({ item, onUpdatedItem, onRemoveItem }: UseItemCartProps) {
    const increaseQuantity = () => {
        // Implementation for increasing quantity
        onUpdatedItem({ ...item, quantity: item.quantity + 1 });
    };

    const decreaseQuantity = () => {
        // Implementation for decreasing quantity
        if (item.quantity > 1) {
            onUpdatedItem({ ...item, quantity: item.quantity - 1 });
        }
    };

    const removeItem = () => {
        onRemoveItem(item.id);
    }
    
    return {
        increaseQuantity,
        decreaseQuantity,
        removeItem
    };
}