import { BiHeart } from "react-icons/bi";
import AddToCart from "../../ui/Button/AddToCart";

const Card = ({ product }) => {
  const { img, name, category, price, currency } = product;

  return (
    <article className="w-full max-w-[250px] h-80 rounded-xl shadow-md hover:shadow-lg transition p-4 my-10 bg-white">
      {/* Image */}
      <div className="flex justify-center items-center h-[65%]">
        <img src={img} alt={name} className="h-full object-cover" />
      </div>

      {/* Content */}
      <div className="mt-5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-[1rem] uppercase leading-tight truncate">
              {name}
            </h3>
            <p className="text-[0.9rem] text-gray-500">{category}</p>
          </div>

          <button
            className="text-gray-400 hover:text-red-500 transition mt-1"
            type="button"
          >
            <BiHeart size={25} />
          </button>
        </div>

        {/* Price + Button */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-[0.9rem] font-bold text-green-600">
              ${price}
            </span>
            <span className="text-[12px] text-gray-600">
              {currency || "USD"}
            </span>
          </div>

          {/* ✅ add to cart needs product */}
          <AddToCart product={product} />
        </div>
      </div>
    </article>
  );
};

export default Card;
