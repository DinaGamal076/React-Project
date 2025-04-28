import React, { useState, useContext } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "./User";

const Login = ({
  products,
  setProducts,
  allProducts,
  setAllProducts,
  cart,
  setCart,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { login, isUserRegistered, currentUser } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!isUserRegistered(username, password)) {
      setError("Invalid username or password. Please sign up first.");
      return;
    }

    const success = login(username, password);
    if (success) {
      console.log("Login successful!");

      // Redirect based on role
      const userRole = username === "admin" ? "admin" : "user";
      if (userRole === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/home", {
          state: {
            products,
            setProducts,
            allProducts,
            setAllProducts,
            cart,
            setCart,
          },
        });
      }
    } else {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-pink-500">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm">
        <h3 className="text-center text-2xl font-bold mb-4 text-gray-800">
          Login
        </h3>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                className="w-full outline-none"
                placeholder="Type your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                className="w-full outline-none"
                placeholder="Type your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 rounded-md text-white font-semibold bg-gradient-to-r from-blue-500 to-pink-500 hover:opacity-90 transition-opacity"
          >
            LOGIN
          </button>

          <div className="text-center text-sm text-gray-700 mt-3">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="font-bold text-blue-700 hover:underline"
            >
              SIGN UP
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
