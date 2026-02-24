import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const AddToCart = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart(product);
  };

  return (
    <button
      onClick={handleAdd}
      className="bg-blue-500 text-white px-3 py-1 text-sm rounded-md whitespace-nowrap"
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
