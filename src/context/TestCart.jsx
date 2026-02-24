import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

export default function TestCart() {
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    console.log("Cart Items:", cartItems);
  }, [cartItems]);

  return null;
}
