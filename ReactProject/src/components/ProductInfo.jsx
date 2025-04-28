
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Pages/User";
import LoginModal from "./LoginModal";
import {
  FaStar,
  FaShoppingCart,
  FaHeart,
  FaBalanceScale,
  FaShareAlt,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaApple,
  FaGooglePay,
} from "react-icons/fa";

const ProductInfo = ({
  product,
  quantity,
  handleQuantityChange,
  setCart,
  setWishlist,
}) => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { isLoggedIn } = useContext(UserContext); // 👈 this will always be in sync

  const requireLogin = (action) => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
    } else {
      action();
    }
  };


  const handleAddToCart = (id) => {
    setCart((prevCart) =>
      prevCart.some((item) => item.id === id)
        ? prevCart
        : [...prevCart, { ...product, counter: quantity }]
    );
    navigate("/cart");
  };

  const handleBuyNow = (id) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, counter: quantity } : item
        );
      } else {
        return [...prevCart, { ...product, counter: quantity }];
      }
    });
    navigate("/checkout");
  };

  const handleAddToWishlist = (id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.some((item) => item.id === id)
        ? prevWishlist
        : [...prevWishlist, product]
    );
  };

  return (
    <div className="flex flex-col min-h-screen py-10 bg-gray-50">
      {showLoginModal && !isLoggedIn && (
        <LoginModal setIsOpen={setShowLoginModal} />
      )}
      <div className="flex-grow flex justify-center items-center px-6 shadow-2xl">
        <div className="max-w-6xl w-full rounded-lg p-8 flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="flex justify-center items-center w-full md:w-1/2">
            <img
              src={product.image || "/default-placeholder.png"}
              alt={product.title}
              className="w-full h-auto max-h-96 rounded-lg shadow-lg object-contain"
            />
          </div>

          {/* Info Section */}
          <div className="w-full md:w-1/2">
            <h4 className="text-gray-800 font-semibold text-3xl mb-2">
              {product.title}
            </h4>

            <p className="mb-1 text-sm text-gray-500">
              Availability:{" "}
              {product.quantity > 0 ? (
                <span className="text-green-500 font-semibold">In Stock</span>
              ) : (
                <span className="text-red-500 font-semibold">Out of Stock</span>
              )}
            </p>

            <p className="mb-3 text-sm text-gray-500">
              Category: <strong>{product.category}</strong>
            </p>

            <div className="flex items-center mb-3">
              <span className="text-yellow-500 font-semibold">
                {product.rating.rate} <FaStar className="inline ml-1" />
              </span>
            </div>

            <div className="mb-3">
              <span className="line-through text-gray-500 text-lg mr-2">
                ${product.price}
              </span>
              <span className="text-blue-500 text-3xl font-semibold">
                ${product.offerPrice}
              </span>
              <span className="ml-2 bg-yellow-400 text-gray-800 px-3 py-1 rounded font-semibold">
                {product.offer}
              </span>
            </div>

            <div className="mb-4">
              <label className="font-bold text-gray-700">Quantity</label>
              <div className="flex items-center mt-2 max-w-[150px]">
                <input
                  type="number"
                  min={1}
                  max={product.quantity}
                  value={quantity}
                  onChange={handleQuantityChange}
                  disabled={product.quantity === 0}
                  className="border border-gray-300 rounded-md px-3 py-2 text-center text-black"
                />
              </div>
            </div>
            {quantity === product.quantity && (
              <p className="text-red-500">
                That's the maximum available quantity of the product
              </p>
            )}

            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <button
                disabled={product.quantity === 0}
                className={`${
                  product.quantity === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white font-semibold py-2 px-12 rounded-md flex items-center justify-center w-full md:w-1/2 transition duration-200 text-lg`}
                onClick={(e) => {
                  e.preventDefault();
                  requireLogin(() => handleAddToCart(product.id));
                }}
              >
                <FaShoppingCart className="mr-2" /> Add To Cart
              </button>

              <button
                className="bg-yellow-600 text-white font-semibold py-2 px-12 rounded-md w-full md:w-1/2 hover:bg-yellow-500 transition duration-200 text-lg"
                onClick={(e) => {
                  e.preventDefault();
                  requireLogin(() => handleBuyNow(product.id));
                }}
              >
                Buy Now
              </button>
            </div>

            <div className="mt-4 flex gap-6 text-gray-600">
              <div
                className="flex items-center gap-2 cursor-pointer hover:text-gray-400"
                onClick={(e) => {
                  e.preventDefault();
                  requireLogin(() => handleAddToWishlist(product.id));
                }}
              >
                <FaHeart /> Add to favourite
              </div>
              <div className="flex items-center gap-2">
                <FaBalanceScale /> Add to Compare
              </div>
              <div className="flex items-center gap-2">
                <FaShareAlt /> Share Product
              </div>
            </div>

            <div className="mt-6 border-t pt-4">
              <p className="mb-2 font-semibold text-gray-800">
                100% Guarantee Safe Checkout
              </p>
              <div className="flex justify-between max-w-[320px] mx-auto">
                <FaCcVisa size={30} className="text-blue-500" />
                <FaCcMastercard size={30} className="text-black" />
                <FaCcPaypal size={30} className="text-blue-500" />
                <FaApple size={30} className="text-black" />
                <FaGooglePay size={30} className="text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;