import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import { useContext, useState } from "react";
import { UserContext } from "../Pages/User";
import logoImg from "../assets/logo1.png";
import emptyCart from "../assets/11329060new.png";

function Navbar({ cart, setCart, wishlist, setWishlist }) {
  const navigate = useNavigate();
  const { isLoggedIn, currentUser, logout } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogout = () => {
    logout();
    setCart([]);
    navigate("/login");
  };

  function handleRemoveFromCart(id) {
    setCart((cart) => cart.filter((product) => product.id !== id));
  }

  function handleIncProductCount(id) {
    setCart((cart) =>
      cart.map((product) => {
        if (product.id === id) {
          if (product.counter < product.quantity) {
            const newCounter = product.counter + 1;
            return {
              ...product,
              counter: newCounter,
              isMaxCount: false,
              finalPrice: product.offerPrice
                ? product.offerPrice * newCounter
                : product.price * newCounter,
            };
          } else {
            return { ...product, isMaxCount: true };
          }
        }
        return product;
      })
    );
  }

  function handleDecProductCount(id) {
    setCart((prevCart) =>
      prevCart.map((product) => {
        if (product.id === id && product.counter > 1) {
          const newCounter = product.counter - 1;
          return {
            ...product,
            counter: newCounter,
            isMaxCount: false,
            finalPrice: product.offerPrice
              ? product.offerPrice * newCounter
              : product.price * newCounter,
          };
        }
        return product;
      })
    );
  }

  function handleRemoveFromWishlist(id) {
    setWishlist((wishlist) => wishlist.filter((product) => product.id !== id));
  }

  function handleAddToCartFromWishlist(id) {
    if (!isLoggedIn) {
      setErrorMessage("You must be logged in to add items to the cart.");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    const product = wishlist.find((item) => item.id === id);
    setCart((prevCart) => {
      const alreadyInCart = prevCart.some((item) => item.id === id);
      return alreadyInCart
        ? prevCart
        : [...prevCart, { ...product, counter: 1 }];
    });
  }

  return (
    <div className="navbar shadow-sm sticky top-0 z-50 bg-[#001937] px-4 md:px-16">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost p-0">
          <img src={logoImg} alt="Logo" className="h-10 md:h-12" />
        </Link>
      </div>

      <div className="flex items-center gap-4 md:gap-4">
        <div>
          <Search />
        </div>

        {/* Wishlist Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              {wishlist.length ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="red"
                  viewBox="0 0 24 24"
                  stroke="red"
                  strokeWidth={2}
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.01 4.01 4 6.5 4c1.74 0 3.41 1.01 4.13 2.44h1.74C14.09 5.01 15.76 4 17.5 4 19.99 4 22 6.01 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-6 w-6 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.01 4.01 4 6.5 4c1.74 0 3.41 1.01 4.13 2.44h1.74C14.09 5.01 15.76 4 17.5 4 19.99 4 22 6.01 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              )}
              <span className="badge badge-sm indicator-item">
                {wishlist.length}
              </span>
            </div>
          </div>

          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-10 mt-3 w-96 shadow-lg"
          >
            <div className="card-body max-h-96 overflow-y-auto space-y-4">
              {wishlist.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-60 text-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 mb-3 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.01 4.01 4 6.5 4c1.74 0 3.41 1.01 4.13 2.44h1.74C14.09 5.01 15.76 4 17.5 4 19.99 4 22 6.01 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                  <span>Your favourite list is empty</span>
                  <img
                    src="https://img.icons8.com/?size=100&id=117006&format=png&color=000000"
                    alt="Empty favourites"
                    className="w-50 relative left-[30%] translate-x-[-50%]"
                  />
                  <Link to={`/shop`} className="w-full">
                    <button
                      className="btn w-50 text-white"
                      style={{ backgroundColor: "#001937" }}
                    >
                      Show Products
                    </button>
                  </Link>
                </div>
              ) : (
                <>
                  <span className="text-lg font-bold text-center block">
                    {wishlist.length === 1
                      ? `${wishlist.length} Item`
                      : `${wishlist.length} Items`}
                  </span>

                  {wishlist.map((product) => (
                    <div
                      className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition"
                      key={product.id}
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div className="flex flex-col justify-between flex-grow">
                        <h6 className="font-semibold text-sm line-clamp-2">
                          {product.title}
                        </h6>
                        <p className="text-[#E0045D] font-medium text-sm mt-1">
                          Price: {product.finalPrice}$
                        </p>
                        <div className="flex gap-2 mt-2">
                          <button
                            className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600"
                            onClick={() =>
                              handleAddToCartFromWishlist(product.id)
                            }
                          >
                            Add to Cart
                          </button>
                          <button
                            className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
                            onClick={() => handleRemoveFromWishlist(product.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Cart Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#E0045D"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {cart.length}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-110 shadow"
          >
            <div className="card-body h-96 overflow-y-auto">
              <span className="text-lg font-bold text-center">
                {cart.length === 0 && (
                  <>
                    <span>Your cart is empty</span>
                    <img
                      src={emptyCart}
                      alt="Empty cart"
                      className="w-50 relative left-[50%] translate-x-[-50%]"
                    />
                    <Link to={`/shop`} className="w-full">
                      <button
                        className="btn w-full mt-2 text-white"
                        style={{ backgroundColor: "#001937" }}
                      >
                        Start shoping
                      </button>
                    </Link>
                  </>
                )}
                {cart.length === 1 && `${cart.length} Item`}
                {cart.length > 1 && `${cart.length} Items`}
              </span>
              {cart.map((product) => (
                <div className="flex justify-between gap-3" key={product.id}>
                  <img src={product.image} alt="" className="h-26" />
                  <div className="flex flex-col justify-between basis-90 pb-1">
                    <div>
                      <h6>{product.title}</h6>
                    </div>
                    <div>
                      <button
                        disabled={product.isMaxCount}
                        className="btn bg-blue-400 rounded-full p-0 h-8 w-8 mr-1 text-white"
                        onClick={() => handleIncProductCount(product.id)}
                      >
                        +
                      </button>
                      <span>Count: {product.counter}</span>
                      {product.counter === 1 ? (
                        <button
                          className="btn bg-blue-400 rounded-full p-0 h-8 w-8 ml-1 text-white"
                          onClick={() => handleRemoveFromCart(product.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white hover:text-red-500 cursor-pointer transition-colors"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      ) : (
                        <button
                          className="btn bg-blue-400 rounded-full p-0 h-8 w-8 ml-1 text-white"
                          onClick={() => handleDecProductCount(product.id)}
                        >
                          -
                        </button>
                      )}
                      {product.isMaxCount ? (
                        <p className="text-red-600">
                          That's the maximum available quantity of the product
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div>
                      {" "}
                      <p className="text-[#E0045D]">
                        Price: {product.finalPrice}$
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      className="cursor-pointer"
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      ❌
                    </button>
                  </div>
                </div>
              ))}
              {cart.length != 0 ? (
                <span className="text-info text-center">
                  Total:
                  {cart.reduce((a, p) => a + p.finalPrice, 0)}$
                </span>
              ) : (
                ""
              )}
              <div className="card-actions">
                {
                  <Link
                    to="/cart"
                    className="btn btn-block text-white"
                    style={{ backgroundColor: "#E0045D" }}
                  >
                    View Cart
                  </Link>
                }
              </div>
            </div>
          </div>
        </div>

        {/* Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {!isLoggedIn ? (
              <>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <span className="px-4 py-2 text-gray-700">
                    Hello, {currentUser?.username}
                  </span>
                </li>
                {currentUser?.role === "admin" && (
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                )}
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="error-message text-red-500 text-sm">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
