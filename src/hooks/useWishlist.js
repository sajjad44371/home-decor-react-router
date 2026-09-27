import { useEffect, useState } from "react";

const useWishlist = () => {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const savedWishlist = localStorage.getItem("wishlist");
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch (error) {
      console.error("Local storage load error:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } catch (error) {
      console.error("Local storage save error (Storage might be full):", error);
    }
  }, [wishlist]);

  const addToWishlist = (product) => {
    if (!product || !product.id) {
      console.warn("Invalid product data provided.");
      return { success: false, message: "Invalid product data" };
    }

    const isAlreadyExist = wishlist.some((item) => item.id === product.id);
    if (isAlreadyExist) {
      return { success: false, message: "Product already in wishlist" };
    }

    setWishlist((prevWishlist) => [...prevWishlist, product]);
    return { success: true, message: "Product added successfully" };
  };

  const removeFromWishlist = (productId) => {
    if (!productId) return;
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== productId),
    );
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
  };
};

export default useWishlist;
