import React, { useState, useContext } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from "../Pages/User";

const Reviews = ({
  activeTab,
  setActiveTab,
  product,
  rating,
  comment,
  setComment,
  ratingSubmitted,
  commentSubmitted,
  handleReviewSubmit,
  setRating,
}) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editedComment, setEditedComment] = useState("");
  const [editedRating, setEditedRating] = useState(0);

  const { isLoggedIn, currentUser } = useContext(UserContext);
  const username = currentUser?.username;

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedComment(product.reviews[index].comment);
    setEditedRating(product.reviews[index].rating || 0);
  };

  const handleUpdate = () => {
    const updatedReviews = [...product.reviews];
    updatedReviews[editIndex] = {
      ...updatedReviews[editIndex],
      comment: editedComment || product.reviews[editIndex].comment,
      rating: editedRating,
    };
    product.reviews = updatedReviews;
    setEditIndex(null);
  };

  return (
    <>
      {/* Tab navigation */}
      <div className="mt-6 flex space-x-8 justify-center">
        <button
          className={`px-6 py-3 text-sm font-semibold cursor-pointer rounded-full transition-all duration-300 transform ${
            activeTab === "description"
              ? "bg-yellow-600 text-white shadow-lg"
              : "bg-gray-100 text-gray-800 hover:bg-yellow-200"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`px-6 py-3 text-sm font-semibold cursor-pointer rounded-full transition-all duration-300 transform ${
            activeTab === "reviews"
              ? "bg-yellow-600 text-white shadow-lg"
              : "bg-gray-100 text-gray-800 hover:bg-yellow-200"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      {/* Description Tab */}
      {activeTab === "description" && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-xl">
          <h4 className="font-bold text-2xl text-gray-800 mb-4">Description</h4>
          <p className="text-gray-700">
            {product?.description || "No description available."}
          </p>
        </div>
      )}

      {/* Reviews Tab */}
      {activeTab === "reviews" && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-xl">
          <h4 className="font-bold text-2xl text-gray-800 mb-6">Reviews</h4>

          {!isLoggedIn ? (
            <>
              <div className="mt-4 p-4 bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500">
                <strong>No comments yet</strong>
              </div>
              <div className="mt-4 p-4 bg-red-100 text-red-800 border-l-4 border-red-500">
                <strong>
                  You must be logged in to submit a review.{" "}
                  <Link to="/login" className="font-bold text-blue-700 hover:underline">
                    LOGIN
                  </Link>
                </strong>
              </div>
            </>
          ) : (
            <>
              {/* Display Reviews */}
              {product?.reviews && Array.isArray(product.reviews) && product.reviews.length > 0 ? (
                product.reviews.map((review, index) => (
                  <div key={index} className="mb-6 pb-6 border-b border-gray-200">
                    <div className="flex items-center mb-2">
                      <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold text-base shadow-sm">
                        {username}
                      </div>
                    </div>

                    {review.rating ? (
                      <div className="flex text-yellow-500 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar
                            key={star}
                            size={22}
                            color={star <= review.rating ? "gold" : "gray"}
                          />
                        ))}
                      </div>
                    ) : null}

                    {/* Edit button */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600 text-sm">
                        {editIndex !== index && " "}
                      </span>
                      <button
                        className="text-sm text-blue-600 hover:underline"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                    </div>

                    {editIndex === index ? (
                      <>
                        <textarea
                          className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
                          value={editedComment}
                          onChange={(e) => setEditedComment(e.target.value)}
                        />
                        <div className="flex items-center mt-2 space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                              key={star}
                              size={24}
                              color={star <= editedRating ? "gold" : "gray"}
                              onClick={() => setEditedRating(star)}
                              className="cursor-pointer"
                            />
                          ))}
                        </div>
                        <button
                          className="mt-2 px-4 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-500"
                          onClick={handleUpdate}
                        >
                          Save
                        </button>
                      </>
                    ) : (
                      <p className="text-gray-700 text-lg">{review.comment}</p>
                    )}
                  </div>
                ))
              ) : (
                <div className="mt-4 p-4 bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500">
                  <strong>No comments yet</strong>
                </div>
              )}

              {/* Review Form */}
              <form onSubmit={handleReviewSubmit}>
                {!ratingSubmitted && (
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Rate this product
                    </label>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={star}
                          size={30}
                          color={star <= rating ? "gold" : "gray"}
                          onClick={() => {
                            if (!ratingSubmitted) setRating(star);
                          }}
                          className="cursor-pointer transition-all duration-300 hover:scale-110"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Comment box */}
                {!commentSubmitted && (
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Your Review
                    </label>
                    <textarea
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 text-gray-800 placeholder:text-gray-500"
                      rows="4"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Write your review here..."
                      maxLength={500}
                    />
                    <p className="text-sm text-gray-500 mt-1">{comment.length}/500 characters</p>
                  </div>
                )}

                <button
                  className={`w-48 py-2.5 text-sm bg-yellow-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform mx-auto block cursor-pointer ${
                    (ratingSubmitted && comment.trim() === "")
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-yellow-500"
                  }`}
                  type="submit"
                  disabled={ratingSubmitted && comment.trim() === ""}
                >
                  {ratingSubmitted && commentSubmitted ? "Review Submitted" : "Submit Review"}
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Reviews;
