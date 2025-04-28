// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaUser, FaLock } from "react-icons/fa";

// const Login = () => {
//   return (
//     <div
//       className="d-flex justify-content-center align-items-center vh-100"
//       style={{
//         background: "linear-gradient(135deg, #3b82f6, #ec4899)",
//       }}
//     >
//       <div className="card p-4 shadow-lg" style={{ width: "350px", borderRadius: "10px" }}>
//         <h3 className="text-center fw-bold">Login</h3>
//         <form>
//           <div className="mb-3">
//             <label className="form-label">Username</label>
//             <div className="input-group">
//               <span className="input-group-text">
//                 <FaUser />
//               </span>
//               <input type="text" className="form-control" placeholder="Type your username" />
//             </div>
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <div className="input-group">
//               <span className="input-group-text">
//                 <FaLock />
//               </span>
//               <input type="password" className="form-control" placeholder="Type your password" />
//             </div>
//           </div>
//           <div className="d-flex justify-content-between">
//             <a href="#" className="text-decoration-none">Forgot password?</a>
//           </div>
//           <button className="btn w-100 mt-3 text-white" style={{ background: "linear-gradient(90deg, #3b82f6, #ec4899)" }}>
//             LOGIN
//           </button>
//           <div className="text-center mt-3">
//             <span>Or Sign Up Using</span>
//             <div className="d-flex justify-content-center mt-2">
//               <button className="btn btn-outline-primary mx-2">
//                 <i className="fab fa-facebook"></i>
//               </button>
//               <button className="btn btn-outline-info mx-2">
//                 <i className="fab fa-twitter"></i>
//               </button>
//               <button className="btn btn-outline-danger mx-2">
//                 <i className="fab fa-google"></i>
//               </button>
//             </div>
//           </div>
//           <div className="text-center mt-3">
//             <span>Or Sign Up Using</span>
//             <a href="#" className="d-block text-decoration-none fw-bold">SIGN UP</a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
/////////////////////////////////
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaUser, FaLock } from "react-icons/fa";

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     // Simulate login process
//     setTimeout(() => {
//       if (username === '' || password === '') {
//         setError('Please fill in all fields');
//       } else {
//         // Handle successful login
//       }
//       setLoading(false);
//     }, 2000);
//   };

//   return (
//     <div
//       className="d-flex justify-content-center align-items-center vh-100"
//       style={{
//         background: "linear-gradient(135deg, #3b82f6, #ec4899)",
//       }}
//     >
//       <div className="card p-4 shadow-lg" style={{ width: "350px", borderRadius: "10px" }}>
//         <h3 className="text-center fw-bold">Login</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label className="form-label">Username</label>
//             <div className="input-group">
//               <span className="input-group-text">
//                 <FaUser />
//               </span>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Type your username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//             </div>
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <div className="input-group">
//               <span className="input-group-text">
//                 <FaLock />
//               </span>
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Type your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//           </div>
//           {error && <p className="text-danger">{error}</p>}
//           <div className="d-flex justify-content-between">
//             <a href="#" className="text-decoration-none">Forgot password?</a>
//           </div>
//           <button className="btn w-100 mt-3 text-white" style={{ background: "linear-gradient(90deg, #3b82f6, #ec4899)" }} disabled={loading}>
//             {loading ? 'Loading...' : 'LOGIN'}
//           </button>
//           <div className="text-center mt-3">
//             <span>Or Sign Up Using</span>
//             <div className="d-flex justify-content-center mt-2">
//               <button className="btn btn-outline-primary mx-2">
//                 <i className="fab fa-facebook"></i>
//               </button>
//               <button className="btn btn-outline-info mx-2">
//                 <i className="fab fa-twitter"></i>
//               </button>
//               <button className="btn btn-outline-danger mx-2">
//                 <i className="fab fa-google"></i>
//               </button>
//             </div>
//           </div>
//           <div className="text-center mt-3">
//             <span>Or Sign Up Using</span>
//             <a href="#" className="d-block text-decoration-none fw-bold">SIGN UP</a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
////////////////////////////////////
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaUser, FaLock } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Simulate check if user is registered
//     const isSignedUp = true; // Replace with actual sign-up check logic

//     if (!isSignedUp) {
//       setError('You must sign up first.');
//       setTimeout(() => {
//         navigate('/signup'); // Redirect to sign-up page if not signed up
//       }, 2000);
//       return; // Prevent login
//     }

//     // Simulate a successful login
//     console.log("Logging in...");
//     // After a successful login, redirect to the products page
//     navigate('/products');
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: "linear-gradient(135deg, #3b82f6, #ec4899)" }}>
//       <div className="card p-4 shadow-lg" style={{ width: "350px", borderRadius: "10px" }}>
//         <h3 className="text-center fw-bold">Login</h3>
//         <form onSubmit={handleLogin}>
//           <div className="mb-3">
//             <label className="form-label">Username</label>
//             <div className="input-group">
//               <span className="input-group-text"><FaUser /></span>
//               <input type="text" className="form-control" placeholder="Type your username" value={username} onChange={(e) => setUsername(e.target.value)} required />
//             </div>
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <div className="input-group">
//               <span className="input-group-text"><FaLock /></span>
//               <input type="password" className="form-control" placeholder="Type your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//             </div>
//           </div>
//           {error && <p className="text-danger">{error}</p>}
//           <button className="btn w-100 mt-3 text-white" style={{ background: "linear-gradient(90deg, #3b82f6, #ec4899)" }}>
//             LOGIN
//           </button>
//           <div className="text-center mt-3">
//             <span>Don't have an account?</span>
//             <a href="/signup" className="d-block text-decoration-none fw-bold">SIGN UP</a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
////////////////////////////////////////
import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./User"; // Adjust the path as necessary

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { isUserRegistered } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if user is registered with the provided credentials
    if (!isUserRegistered(username, password)) {
      setError("Invalid username or password. Please sign up first.");
      return; // Prevent login
    }

    // Simulate a successful login
    console.log("Logging in...");
    navigate("/products"); // Redirect to products page after successful login
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "linear-gradient(135deg, #3b82f6, #ec4899)" }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{ width: "350px", borderRadius: "10px" }}
      >
        <h3 className="text-center fw-bold">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <div className="input-group">
              <span className="input-group-text">
                <FaUser />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Type your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <FaLock />
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Type your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button
            className="btn w-100 mt-3 text-white"
            style={{ background: "linear-gradient(90deg, #3b82f6, #ec4899)" }}
          >
            LOGIN
          </button>
          <div className="text-center mt-3">
            <span>Don't have an account?</span>
            <a href="/signup" className="d-block text-decoration-none fw-bold">
              SIGN UP
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
