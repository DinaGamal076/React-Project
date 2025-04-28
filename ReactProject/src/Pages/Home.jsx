import Footer from "../components/Footer";
import GoShopping from "../components/GoShopping";
import Navbar from "../components/Navbar";
import OffersAndShop from "../components/OffersAndShop";
import Products from "../components/Products";
import Slider from "../components/Slider";

function Home({
  products,
  setProducts,
  allProducts,
  setAllProducts,
  cart,
  setCart,
  wishlist,
  setWishlist,
}) {
  return (
    <>
      <Navbar
        cart={cart}
        setCart={setCart}
        wishlist={wishlist}
        setWishlist={setWishlist}
      />
      <Slider />
      <div className="flex flex-wrap m-10 gap-4 justify-center">
        <div className=" md:basis-[45%] w-full">
          <OffersAndShop></OffersAndShop>
        </div>
        <div className=" md:basis-[45%]">
          <GoShopping></GoShopping>
        </div>
      </div>
      <Products
        cart={cart}
        setCart={setCart}
        products={products}
        setProducts={setProducts}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        displayedProductsCount={20}
        wishlist={wishlist}
        setWishlist={setWishlist}
      />

      <Footer />
    </>
  );
}

export default Home;
