import { useState, useEffect } from "react";
import productsList from "../../../product";

const useProduct = (id) => {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [ratingSubmitted, setRatingSubmitted] = useState(false);
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setError(null);

    const selectedProduct = productsList.find(
      (item) => item.id === parseInt(id)
    );

    if (selectedProduct) {
      setProduct(selectedProduct);
      const filteredProducts = productsList.filter(
        (item) =>
          item.category === selectedProduct.category &&
          item.id !== selectedProduct.id
      );
      setRelatedProducts(filteredProducts.slice(0, 4));
    } else {
      setError("❌ Product not found.");
    }

    setLoading(false);
  }, [id]);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    if (rating === 0 && comment.trim() === "") {
      alert("Please provide a rating or a comment.");
      return;
    }

    const newReview = {
      rating: rating,
      comment: comment,
    };

    setProduct({
      ...product,
      reviews: [newReview],
    });

    if (rating > 0) setRatingSubmitted(true);
    if (comment.trim() !== "") setCommentSubmitted(true);

    setComment("");
  };

  return {
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
    setQuantity,
    setActiveTab,
    setRating,
    setComment,
    handleQuantityChange,
    handleReviewSubmit,
  };
};

export default useProduct;
