import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/product"; // get data from product.js
import { FaMinus, FaPlus } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

const ProductDetail = () => {
  const [countItem, setCountItem] = useState(1);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  // find product by id
  const product = products.find((item) => String(item.id) === String(id));

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }
  const handleAddToCart = () => {
    addToCart(product, countItem);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      {/* Stack vertically on mobile, side by side on desktop */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={product.img}
            alt={product.name}
            className="w-48 md:w-80 object-cover"
          />
        </div>

        {/* Right Side - Info */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold uppercase">
            {product.name}
          </h2>

          <p className="text-gray-500 mt-2">Category: {product.category}</p>

          <div className="mt-4 text-xl font-bold text-green-600">
            ${product.price}
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4 mt-4">
            <p className="text-lg">Quantity</p>
            <button
              className="border-2 px-3 py-1 rounded"
              onClick={() => setCountItem((prev) => Math.max(prev - 1, 1))}
            >
              <FaMinus size={10} />
            </button>
            <span className="text-xl font-bold">{countItem}</span>
            <button
              className="border-2 px-3 py-1 rounded"
              onClick={() => setCountItem((prev) => prev + 1)}
            >
              <FaPlus size={10} />
            </button>
          </div>

          {/* Add to Cart */}
          <div className="mt-6">
            <button
              className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-10 md:mt-16">
        <h3 className="text-xl font-semibold border-b pb-3">
          Rating & Reviews
        </h3>
        <div className="mt-6 text-gray-600">Reviews will go here...</div>
      </div>
    </div>
  );
};

export default ProductDetail;
