import { useItemCart } from "../hooks/useItemCart";

export default function ItemCart({ item, onUpdateItem, onRemoveItem }) {
    const { name, price, image, quantity } = item;

    const { increaseQuantity, decreaseQuantity, removeItem } = useItemCart(item, onUpdateItem, onRemoveItem);

    return (
        <tr>
            <td>
                <img className="img-fluid" src={`./public/img/${image}.jpg`} alt="imagen guitarra" />
            </td>
            <td>{name}</td>
            <td className="fw-bold">
                ${price.toFixed(2)}
            </td>
            <td className="flex align-items-start gap-4">
                <button
                    type="button"
                    className="btn btn-dark"
                    onClick={decreaseQuantity}
                >
                    -
                </button>
                {quantity}
                <button
                    type="button"
                    className="btn btn-dark"
                    onClick={increaseQuantity}
                >
                    +
                </button>
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    type="button"
                    onClick={removeItem}
                >
                    X
                </button>
            </td>
        </tr>
    )
}       