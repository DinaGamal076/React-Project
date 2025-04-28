import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RelatedProducts = ({ relatedProducts }) => (
  <div className="mt-8">
    <h5 className="font-bold text-xl mb-4" style={{ color: "black" }}>
      Related Products
    </h5>
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${
        relatedProducts.length === 3 ? 3 : 4
      } lg:grid-cols-4 gap-6 ${
        relatedProducts.length === 3 ? "justify-center" : ""
      }`}
    >
      {relatedProducts.map((related) => (
        <div key={related.id} className="relative">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Image Section */}
            <div
              className="flex justify-center items-center p-4"
              style={{ height: "220px" }}
            >
              <img
                src={related.image}
                alt={related.title}
                className="max-h-full max-w-full object-contain rounded-lg transition-all duration-300 ease-in-out hover:scale-105"
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-between p-4">
              <h6 className="text-sm font-semibold text-gray-800 truncate">
                {related.title}
              </h6>
              <p className="text-sm text-gray-600 font-medium">
                ${related.offerPrice}
              </p>
              <Link
                to={`/product/${related.id}`}
                className="absolute inset-0 z-10"
              />
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  </div>
);

export default RelatedProducts;
