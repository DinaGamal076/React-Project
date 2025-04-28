
////////////
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LoginModal({ setIsOpen }) {
  const [isOpen, setLocalOpen] = useState(true);

  useEffect(() => {
    if (isOpen) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [isOpen]);

  const closeModal = () => {
    setLocalOpen(false);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Login Required
          </h3>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <p className="text-gray-600 mb-6">
          You must be logged in to access this feature. Please sign in or create
          an account.
        </p>

        <div className="flex flex-col space-y-3">
          <Link
            to="/login"
            onClick={closeModal}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-center transition-colors"
          >
            Login
          </Link>

          <Link
            to="/signup"
            onClick={closeModal}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 text-center transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
