import { BiHeart } from "react-icons/bi";
import AddToCart from "../Button/AddToCart.jsx";
const ProductCard = ({ img, name, category, priceR, priceD }) => {
  return (
    <article className="w-[250px] h-80 rounded-xl shadow-md hover:shadow-lg transition p-4 my-10">
      {/* Image */}
      <div className="flex justify-center items-center h-[65%] ">
        <img src={img} alt={name} className="h-full object-cover" />
      </div>

      {/* Content */}
      <div className="mt-5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-extrabold text-[1rem] uppercase leading-tight truncate">
              {name}
            </h3>
            <p className="text-[0.9rem] text-gray-500">{category}</p>
          </div>

          {/* Heart icon */}
          <button className="text-gray-400 hover:text-red-500 transition mt-1">
            <BiHeart size={25} />
          </button>
        </div>

        {/* Price + Button */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-[0.9rem] font-bold text-green-600">
              {priceR}
            </span>
            <span className="text-[12px] text-gray-600">{priceD}</span>
          </div>

          <AddToCart />
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
