import { BiHeart } from "react-icons/bi";
import AddToCart from "../../ui/Button/AddToCart";
import { useContext } from "react";
import { FavoriteContext } from "../../../context/FavoriteContext";

const Card = ({ product }) => {
  const { img, name, category, price, currency } = product;
  const { addToFavorites, isFavorite } = useContext(FavoriteContext);
  const handleFavoriteClick = () => {
    addToFavorites(product);
  };
  return (
    <article className="group w-full max-w-[250px] h-80 rounded-xl shadow-md hover:shadow-lg transition p-4 my-10 bg-white">
      {/* Image */}
      <div className="flex justify-center overflow-hidden items-center h-[65%]">
        <img
          src={img}
          alt={name}
          className="h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
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
            onClick={handleFavoriteClick}
            className={`mt-1 transition ${isFavorite(product.id) ? "text-red-500" : "text-gray-400 hover:text-red-500"}`}
            type="button"
          >
            <BiHeart
              size={25}
              fill={isFavorite(product.id) ? "red" : "border-gray-500"}
            />
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
