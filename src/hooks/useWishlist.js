import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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
      toast.error("Invalid product data!");
      return { success: false, message: "Invalid product data" };
    }

    const isAlreadyExist = wishlist.some((item) => item.id === product.id);
    if (isAlreadyExist) {
      toast.error(`${product.name} is already in your wishlist!`);
      return { success: false, message: "Product already in wishlist" };
    }

    setWishlist((prevWishlist) => [...prevWishlist, product]);
    toast.success(`${product.name} added to wishlist! 💖`);
    return { success: true, message: "Product added successfully" };
  };

  const removeFromWishlist = (productId) => {
    if (!productId) return;
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== productId),
    );
    toast.success("Product removed from wishlist!");
  };

  const clearWishlist = () => {
    setWishlist([]);
    toast.success("Wishlist cleared!");
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
  };
};

export default useWishlist;
