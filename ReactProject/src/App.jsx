import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Dashboard from "./Pages/Dashboard";
import CartPage from "./Pages/CartPage";
import ProductDetails from "./Pages/ProductDetails";
import productsList from "../../product";
import Checkout from "./Pages/CheckoutPage";
import CheckoutSuccess from "./Pages/CheckoutSuccessPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Offers from "./Pages/Offers";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import LandingPage from "./Pages/LandingPage";

function App() {
  const [cart, setCart] = useState([]);
  const [allProducts, setAllProducts] = useState(productsList);
  const [products, setProducts] = useState(productsList);
  const [wishlist, setWishlist] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              cart={cart}
              setCart={setCart}
              wishlist={wishlist}
              setWishlist={setWishlist}
            />
          }
        />

        <Route
          path="/home"
          element={
            <Home
              products={products}
              setProducts={setProducts}
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              cart={cart}
              setCart={setCart}
              wishlist={wishlist}
              setWishlist={setWishlist}
            />
          }
        />
        <Route
          path="/offers"
          element={
            <Offers
              products={products}
              setProducts={setProducts}
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              cart={cart}
              setCart={setCart}
              wishlist={wishlist}
              setWishlist={setWishlist}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductDetails
              products={products}
              cart={cart}
              setCart={setCart}
              wishlist={wishlist}
              setWishlist={setWishlist}
            />
          }
        />
        <Route
          path="/shop"
          element={
            <Shop
              products={products}
              setProducts={setProducts}
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              cart={cart}
              setCart={setCart}
              wishlist={wishlist}
              setWishlist={setWishlist}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              cart={cart}
              setCart={setCart}
              wishlist={wishlist}
              setWishlist={setWishlist}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage cart={cart} setCart={setCart} wishlist={wishlist} />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              setCart={setCart}
              wishlist={wishlist}
              setWishlist={setWishlist}
            />
          }
        />
        <Route
          path="/checkout/success"
          element={
            <CheckoutSuccess
              cart={cart}
              setCart={setCart}
              wishlist={wishlist}
              setWishlist={setWishlist}
            />
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
