import { useState } from "react";

const useReview = () => {
  const [reviews, setReviews] = useState([]); // ✅ consistent name

  const addReview = (reviewData) => {
    const newReview = {
      id: Date.now(),
      ...reviewData,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };
    setReviews((prev) => [newReview, ...prev]); // ✅ matches above
  };

  return { reviews, addReview };
};

export default useReview;
