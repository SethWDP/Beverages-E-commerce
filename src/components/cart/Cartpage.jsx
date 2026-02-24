import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Cartpage() {
  const { cartItems, totalPrice, increaseQty, decreaseQty, removeFromCart } =
    useContext(CartContext);

  return (
    <div style={{ padding: 20 }}>
      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={{ marginBottom: 10 }}>
            <b>{item.name}</b> | ${item.price} | qty: {item.qty}
            <button onClick={() => increaseQty(item.id)}> + </button>
            <button onClick={() => decreaseQty(item.id)}> - </button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}

      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}
