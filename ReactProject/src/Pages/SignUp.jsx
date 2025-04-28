import React, { useState, useContext } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from './User';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { addUser, users } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');  

    
    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{5,}$/;
if (!passwordPattern.test(password)) {
  setError('Password must be at least 5 characters long and contain letters, numbers, and symbols.');
  setLoading(false);
  return;
}

    const userExists = users.some(
      (user) => user.username === username || user.email === email
    );
    if (userExists) {
      setError('Username or email already exists');
      setLoading(false);
      return;
    }

    
    setTimeout(() => {
      addUser({ username, email, password });
      setLoading(false);  
      navigate('/login');  
    }, 1000);  
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-fuchsia-600">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm">
        <h3 className="text-center text-2xl font-bold mb-4 text-gray-800">Sign Up</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                className="w-full outline-none"
                placeholder="Type your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                className="w-full outline-none"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-md text-white font-semibold bg-gradient-to-r from-blue-500 to-fuchsia-500 hover:opacity-90 transition-opacity"
          >
            {loading ? 'Loading...' : 'SIGN UP'}
          </button>

          <div className="text-center text-sm text-gray-700 mt-3">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-blue-700 hover:underline">
              LOGIN
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;