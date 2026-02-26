import { useContext } from "react";
import { FavoriteContext } from "../../context/FavoriteContext";
import { BiHeart } from "react-icons/bi";
import AddToCart from "../../components/ui/Button/AddToCart"; // adjust path if needed

const FavoritePage = () => {
  const { favoriteItems, removeFromFavorites } = useContext(FavoriteContext);

  return (
    <div className="px-6 py-10">
      <h2 className="text-2xl font-bold uppercase mb-6">My Favorites</h2>

      {favoriteItems.length === 0 ? (
        <p className="text-gray-500">No favorite products yet.</p>
      ) : (
        <div className="flex flex-wrap gap-6">
          {favoriteItems.map((product) => (
            <article
              key={product.id}
              className="group w-full max-w-[250px] h-80 rounded-xl shadow-md hover:shadow-lg transition p-4 bg-white"
            >
              {/* Image */}
              <div className="flex justify-center items-center h-[65%] overflow-hidden rounded-lg">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="mt-5">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="text-[1rem] uppercase leading-tight truncate">
                      {product.name}
                    </h3>
                    <p className="text-[0.9rem] text-gray-500">
                      {product.category}
                    </p>
                  </div>

                  {/* Remove from favorites */}
                  <button
                    onClick={() => removeFromFavorites(product.id)}
                    className="text-red-500 hover:text-red-700 transition mt-1"
                    type="button"
                    title="Remove from favorites"
                  >
                    <BiHeart size={25} fill="currentColor" />
                  </button>
                </div>

                {/* Price + Add to Cart */}
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[0.9rem] font-bold text-green-600">
                      ${product.price}
                    </span>
                    <span className="text-[12px] text-gray-600">
                      {product.currency || "USD"}
                    </span>
                  </div>

                  <AddToCart product={product} />
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
