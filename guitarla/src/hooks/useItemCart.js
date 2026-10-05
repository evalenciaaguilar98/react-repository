export function useItemCart(item, onUpdateItem, onRemoveItem) {
    const increaseQuantity = () => {
        // Implementation for increasing quantity
        onUpdateItem(item.id, item.quantity += 1);
    };

    const decreaseQuantity = () => {
        // Implementation for decreasing quantity
        if (item.quantity > 1) {
            onUpdateItem(item.id, item.quantity -= 1);
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