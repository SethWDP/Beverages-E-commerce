import React, { useState } from "react";
import products from "../data/product";
import { FavoriteContext } from "./FavoriteContext";

const FavoriteProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addToFavorites = (product) => {
    setFavoriteItems((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };
  const removeFromFavorites = (id) => {
    setFavoriteItems((prev) => prev.filter((item) => item.id !== id));
  };
  const isFavorite = (id) => {
    return favoriteItems.some((item) => item.id === id);
  };
  return (
    <FavoriteContext.Provider
      value={{ favoriteItems, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
