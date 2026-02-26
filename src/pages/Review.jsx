import React, { useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";

const Review = () => {
  // ✅ 5 static user cards (these are just UI cards, not used to reset rating counts)
  const initialReviews = [
    {
      id: "1",
      name: "Sok Veasna",
      avatar: "SV",
      rating: 5,
      text: "Great product!",
    },
    {
      id: "2",
      name: "Vanda",
      avatar: "VA",
      rating: 4,
      text: "Nice and easy to use.",
    },
    {
      id: "3",
      name: "Sothea Rith",
      avatar: "SR",
      rating: 3,
      text: "It’s okay, can improve.",
    },
    {
      id: "4",
      name: "Panha",
      avatar: "PA",
      rating: 2,
      text: "Not bad, but issues.",
    },
    {
      id: "5",
      name: "Sorn Sothea",
      avatar: "SS",
      rating: 1,
      text: "Not satisfied.",
    },
  ];

  // ✅ START FROM YOUR OLD COUNTS (important)
  const [ratingData, setRatingData] = useState([
    { stars: 5, label: "5 stars", count: 1000 },
    { stars: 4, label: "4 stars", count: 501 },
    { stars: 3, label: "3 stars", count: 200 },
    { stars: 2, label: "2 stars", count: 100 },
    { stars: 1, label: "1 star", count: 50 },
  ]);

  // ✅ review cards list (starts with 5 static users)
  const [reviews, setReviews] = useState(initialReviews);

  // ✅ form states
  const [formSubmit, setFormSubmit] = useState("");
  const [userRating, setUserRating] = useState(5);

  // ✅ calculations depend on ratingData (so it starts from your old rating)
  const totalReviews = useMemo(
    () => ratingData.reduce((sum, r) => sum + r.count, 0),
    [ratingData],
  );

  const avgRating = useMemo(() => {
    if (totalReviews === 0) return 0;
    const weighted = ratingData.reduce((sum, r) => sum + r.stars * r.count, 0);
    return weighted / totalReviews;
  }, [ratingData, totalReviews]);

  const maxCount = useMemo(
    () => Math.max(...ratingData.map((r) => r.count), 0),
    [ratingData],
  );

  const filledStars = Math.round(avgRating);

  // ✅ submit: add card + increment rating count from OLD DATA
  function handleSubmit(e) {
    e.preventDefault();
    if (formSubmit.trim() === "") return;

    // 1) add new card
    const newReview = {
      id: crypto.randomUUID(),
      name: "You",
      avatar: "YO",
      rating: userRating,
      text: formSubmit.trim(),
    };
    setReviews((prev) => [newReview, ...prev]);

    // 2) increment ratingData count (start from old rating)
    setRatingData((prev) =>
      prev.map((row) =>
        row.stars === userRating ? { ...row, count: row.count + 1 } : row,
      ),
    );

    setFormSubmit("");
    setUserRating(5);
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center">
        Latest <span className="text-sky-500">Reviews</span>
      </h1>

      <article className="mt-10 flex flex-col lg:flex-row gap-10 lg:justify-between">
        {/* LEFT */}
        <div className="w-full lg:w-[30%] flex flex-col gap-4 items-center lg:items-start">
          <h2 className="font-bold text-6xl sm:text-7xl text-sky-500">
            {avgRating.toFixed(1)}
          </h2>

          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                size={22}
                color={i < filledStars ? "gold" : "#d4d4d4"}
              />
            ))}
          </div>

          <p className="text-zinc-700">
            Based on {totalReviews.toLocaleString()} reviews
          </p>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-[68%] flex gap-3 sm:gap-6">
          {/* labels */}
          <div className="w-[25%] sm:w-[15%] flex flex-col gap-5 sm:gap-6">
            {ratingData.map((r) => (
              <h3 key={r.stars} className="text-sm sm:text-base md:text-lg">
                {r.label}
              </h3>
            ))}
          </div>

          {/* bars */}
          <div className="w-[55%] sm:w-[70%] flex flex-col gap-5 sm:gap-6 pt-1">
            {ratingData.map((r) => {
              const widthPercent =
                maxCount === 0 ? 0 : (r.count / maxCount) * 100;

              return (
                <div
                  key={r.stars}
                  className="h-3 w-full rounded-full bg-zinc-300 overflow-hidden"
                >
                  <div
                    className="h-full bg-sky-500 rounded-full"
                    style={{ width: `${widthPercent}%` }}
                  />
                </div>
              );
            })}
          </div>

          {/* counts */}
          <div className="w-[20%] sm:w-[15%] flex flex-col gap-5 sm:gap-6 text-right">
            {ratingData.map((r) => (
              <h3 key={r.stars} className="text-sm sm:text-base md:text-lg">
                {r.count.toLocaleString()}
              </h3>
            ))}
          </div>
        </div>
      </article>

      {/* FORM */}
      <article className="mt-12">
        <h2 className="font-bold text-xl sm:text-2xl">
          Share your Experience Here
        </h2>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-zinc-700 font-medium">Your rating:</span>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => {
                const starValue = i + 1;
                return (
                  <button
                    key={starValue}
                    type="button"
                    onClick={() => setUserRating(starValue)}
                  >
                    <FaStar
                      size={22}
                      color={starValue <= userRating ? "gold" : "#d4d4d4"}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <textarea
            className="
              w-full lg:w-[80%] h-[160px] sm:h-[180px]
              rounded-md border border-zinc-300 bg-transparent
              p-4 sm:p-6 text-[16px] sm:text-[18px]
              text-zinc-800 placeholder:text-zinc-500 outline-none
            "
            placeholder="Share your feedback here..."
            onChange={(e) => setFormSubmit(e.target.value)}
            value={formSubmit}
          />

          <div className="mt-3 flex lg:w-[80%] justify-end">
            <button className="text-base sm:text-lg text-white bg-sky-500 hover:bg-sky-600 px-5 py-2 rounded-md">
              Submit
            </button>
          </div>
        </form>

        {/* CARDS */}
        {/* CARDS (All Reviews like screenshot) */}
        <section className="mt-14">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-8">
            All Reviews
          </h2>

          <div className="max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="
            relative bg-white
            border border-zinc-200
            rounded-none
            px-6 py-6
            shadow-[0_14px_18px_-18px_rgba(0,0,0,0.35)]
          "
                >
                  {/* Quote icon */}
                  <div className="absolute top-5 right-6 text-zinc-800 text-3xl leading-none select-none">
                    &#8221;&#8221;
                  </div>

                  {/* Header: avatar + name + stars */}
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold">
                      {review.avatar}
                    </div>

                    <div className="leading-tight">
                      <h3 className="font-semibold text-zinc-900 text-sm">
                        {review.name}
                      </h3>

                      <div className="flex gap-1 mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar
                            key={i}
                            size={12}
                            color={i < review.rating ? "gold" : "#d4d4d4"}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Review text */}
                  <p className="mt-4 text-zinc-500 italic text-sm leading-relaxed whitespace-pre-wrap break-words">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>
    </section>
  );
};

export default Review;
