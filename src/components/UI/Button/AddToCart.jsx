const AddToCart = () => {
  const alertAddToCart = () => {
    alert("Item added to cart!");
  };
  return (
    <button
      onClick={alertAddToCart}
      className="bg-blue-500 text-white px-5 py-1.5 rounded-md hover:bg-blue-600 transition duration-300"
    >
      Add to Cart
    </button>
  );
};
export default AddToCart;
