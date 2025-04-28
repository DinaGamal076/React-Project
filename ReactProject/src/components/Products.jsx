import React, { useState, useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from "../Pages/User";
import LoginModal from "./LoginModal";

function Products({ setCart, products, displayedProductsCount, isOffer }) {
  const [seeMore, setSeeMore] = useState({});
  const { isLoggedIn } = useContext(UserContext);
  const [showLoginModal, setShowLoginModal] = useState(false);

  function handleSeeMore(id) {
    setSeeMore((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  function handleBuy(id) {
    const productToAdd = products.find((product) => product.id === id);
    productToAdd.quantity &&
      setCart((prevCart) =>
        prevCart.some((item) => item.id === id)
          ? prevCart
          : [
              ...prevCart,
              {
                ...productToAdd,
                counter: 1,
                finalPrice: productToAdd.offerPrice || productToAdd.price,
              },
            ]
      );
  }

  const renderProductCard = (product) => (
    <div key={product.id} className="overflow-hidden">
      <Link to={`/product/${product.id}`} className="w-full">
        <div className="card bg-base-100 w-60 shadow-lg border-1 border-gray-200 border-b-0 transition-transform transform hover:scale-105 hover:shadow-2xl rounded-lg cursor-pointer">
          <figure className="relative">
            <img
              src={product.image}
              alt={product.title}
              className="h-60 object-cover w-full rounded-t-lg"
            />
            {product.bestseller && (
              <div className="p-1 absolute top-2 left-2 rounded-2xl text-white bg-[#EE5858]">
                Best seller
              </div>
            )}
            {product.offer !== "0" && (
              <div className="p-1 absolute top-2 left-2 bg-amber-300 rounded-2xl">
                {product.offer}
              </div>
            )}
          </figure>

          <div className="card-body p-4">
            <h2 className="card-title text-xl font-semibold line-clamp-1">
              {product.title}
            </h2>
            <p className="text-sm text-gray-600">
              ⭐{product.rating.rate}{" "}
              <span className="bg-gray-300 p-1 rounded-2xl">
                ({product.rating.count})
              </span>
            </p>

            <p className="text-gray-700">
              {seeMore[product.id]
                ? product.description
                : `${product.description.split(" ").slice(0, 8).join(" ")}...`}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleSeeMore(product.id);
                }}
                className="ml-2 text-[#EE5858] hover:underline"
              >
                {seeMore[product.id] ? "See Less" : "See More"}
              </button>
            </p>

            <div className="text-[#2DA5F3] text-lg font-semibold">
              {product.offerPrice === 0 ? (
                `${product.price}$`
              ) : (
                <>
                  <span className="line-through text-gray-500 mr-1">
                    {product.price}$
                  </span>
                  {product.offerPrice}$
                </>
              )}
            </div>
          </div>
        </div>
      </Link>

      <div className="card-actions justify-end">
        <button
          className="btn w-full mt-2 text-white bg-[#E0045D] hover:bg-[#E0045D] transition-colors"
          onClick={(e) => {
            e.preventDefault();
            if (!isLoggedIn) {
              setShowLoginModal(true);
              return;
            }
            handleBuy(product.id);
          }}
        >
          <FaShoppingCart className="mr-2" /> Add To Cart
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex flex-wrap justify-around gap-10 mt-20 mb-20">
        {isOffer
          ? products
              .filter((product) => product.offerPrice !== 0)
              .map(renderProductCard)
          : products.slice(0, displayedProductsCount).map(renderProductCard)}
      </div>

      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
    </>
  );
}

export default Products;
