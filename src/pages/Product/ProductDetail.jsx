import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../../data/product";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import useReview from "../../components/hook/useReview";
import Card from "../../components/ui/card/Card";

const ProductDetail = () => {
  const [countItem, setCountItem] = useState(1);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewForm, setReviewForm] = useState({
    user: "",
    rating: 5,
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  const product = products.find((item) => String(item.id) === String(id));
  const { reviews, addReview } = useReview(id); // ← scoped per product id

  if (!product) return <div className="p-10">Product not found</div>;

  // Recommendations: same category, exclude current product
  const recommended = products
    .filter(
      (p) => p.category === product.category && String(p.id) !== String(id),
    )
    .slice(0, 4);

  // Merge static rating from product.js + user reviews for display
  const userAvg = reviews.length
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : null;
  const displayRating = userAvg
    ? ((product.rating + userAvg) / 2).toFixed(1)
    : product.rating;
  const displayCount = product.ratingCount + reviews.length;

  const handleAddToCart = () => addToCart(product, countItem);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!reviewForm.user.trim() || !reviewForm.comment.trim()) return;
    addReview(reviewForm);
    setReviewForm({ user: "", rating: 5, comment: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      {/* ── Product Info ── */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center items-start">
          <img
            src={product.img}
            alt={product.name}
            className="w-48 md:w-80 object-cover"
          />
        </div>

        {/* Details */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold">{product.name}</h2>
          <p className="text-gray-500 mt-1 capitalize">
            Category: {product.category}
          </p>

          {/* Rating summary */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500 font-bold text-lg">
              {displayRating}
            </span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <FaStar
                  key={s}
                  size={14}
                  className={
                    s <= Math.round(displayRating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="text-gray-400 text-sm">
              ({displayCount} reviews)
            </span>
          </div>

          {/* Badges */}
          <div className="flex gap-2 mt-3">
            {product.isMostSelling && (
              <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded-full">
                🔥 Best Seller
              </span>
            )}
            {product.isTrending && (
              <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded-full">
                📈 Trending
              </span>
            )}
          </div>

          <div className="mt-4 text-2xl font-bold text-green-600">
            ${product.price}
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4 mt-5">
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

          <button
            className="mt-6 w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* ── Recommended Drinks ── */}
      {recommended.length > 0 && (
        <div className="mt-12">
          <h3 className="text-xl font-semibold border-b pb-3">
            You Might Also Like
          </h3>
          <div className="flex flex-wrap gap-4 mt-4">
            {recommended.map((p) => (
              <Card key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      {/* ── Reviews ── */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold border-b pb-3">
          Rating & Reviews ({displayCount})
        </h3>

        {/* Write a Review */}
        <div className="mt-6 bg-gray-50 rounded-xl p-5">
          <h4 className="font-semibold text-lg mb-4">Write a Review</h4>

          {submitted && (
            <div className="mb-4 bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-2 text-sm">
              ✅ Thank you! Your review has been submitted.
            </div>
          )}

          <form onSubmit={handleSubmitReview} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your name"
              value={reviewForm.user}
              onChange={(e) =>
                setReviewForm({ ...reviewForm, user: e.target.value })
              }
              className="border rounded-lg px-4 py-2 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            {/* Star Picker */}
            <div className="flex items-center gap-1">
              <span className="text-sm text-gray-600 mr-2">Your rating:</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  size={26}
                  className={`cursor-pointer transition-colors ${
                    star <= (hoverRating || reviewForm.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                />
              ))}
              <span className="ml-2 text-sm text-gray-400">
                {reviewForm.rating} / 5
              </span>
            </div>

            <textarea
              placeholder="Share your experience with this drink..."
              value={reviewForm.comment}
              onChange={(e) =>
                setReviewForm({ ...reviewForm, comment: e.target.value })
              }
              rows={3}
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              required
            />

            <button
              type="submit"
              className="self-start bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Review
            </button>
          </form>
        </div>

        {/* Review List */}
        <div className="mt-6 flex flex-col gap-4">
          {reviews.length === 0 ? (
            <p className="text-gray-400 text-center py-8">
              No reviews yet — be the first to review this drink!
            </p>
          ) : (
            reviews.map((review) => (
              <div key={review.id} className="border rounded-xl p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                      {review.user.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{review.user}</p>
                      <div className="flex mt-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <FaStar
                            key={s}
                            size={12}
                            className={
                              s <= review.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-gray-400 text-xs">{review.date}</span>
                </div>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {review.comment}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
