import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProductInfo from "../components/ProductInfo";
import Reviews from "../components/Reviews";
import RelatedProducts from "../components/RelatedProducts";
import useProduct from "../hooks/useProduct";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ProductDetails = ({ cart, setCart, wishlist, setWishlist }) => {
  const { id } = useParams();
  const {
    product,
    relatedProducts,
    quantity,
    activeTab,
    loading,
    error,
    rating,
    comment,
    ratingSubmitted,
    commentSubmitted,
    setActiveTab,
    setRating,
    setComment,
    handleQuantityChange,
    handleReviewSubmit,
  } = useProduct(id);

  if (loading)
    return (
      <div className="flex justify-center mt-16">
        <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  if (error)
    return (
      <div className="bg-red-100 text-red-800 px-4 py-3 rounded-lg text-sm mt-4 mx-auto max-w-lg">
        {error}
      </div>
    );

  if (!product)
    return (
      <div className="bg-yellow-100 text-yellow-800 px-4 py-3 rounded-lg text-sm mt-4 mx-auto max-w-lg">
        ❌ Product not found.
      </div>
    );

  return (
    <>
      <Navbar
        cart={cart}
        setCart={setCart}
        wishlist={wishlist}
        setWishlist={setWishlist}
      />

      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-xl w-[100%]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Product Info Section */}
              <div className="">
                <ProductInfo
                  product={product}
                  quantity={quantity}
                  handleQuantityChange={handleQuantityChange}
                  cart={cart}
                  setCart={setCart}
                  setWishlist={setWishlist}
                />
              </div>
            </motion.div>

            {/* Reviews Section */}
            <div className="mt-8">
              <Reviews
                product={product}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                rating={rating}
                setRating={setRating}
                comment={comment}
                setComment={setComment}
                handleReviewSubmit={handleReviewSubmit}
                ratingSubmitted={ratingSubmitted}
                commentSubmitted={commentSubmitted}
              />
            </div>

            {/* Related Products Section */}
            <div className="mt-12">
              <RelatedProducts relatedProducts={relatedProducts} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
