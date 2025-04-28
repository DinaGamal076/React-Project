// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

// const SignUp = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     // Simulate sign-up process
//     setTimeout(() => {
//       if (!username || !email || !password) {
//         setError('Please fill in all fields');
//       } else {
//         // Handle successful sign-up (e.g., send data to API)
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
//         <h3 className="text-center fw-bold">Sign Up</h3>
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
//             <label className="form-label">Email</label>
//             <div className="input-group">
//               <span className="input-group-text">
//                 <FaEnvelope />
//               </span>
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Type your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
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
//           <button className="btn w-100 mt-3 text-white" style={{ background: "linear-gradient(90deg, #3b82f6, #ec4899)" }} disabled={loading}>
//             {loading ? 'Loading...' : 'SIGN UP'}
//           </button>
//           <div className="text-center mt-3">
//             <span>Already have an account?</span>
//             <a href="#" className="d-block text-decoration-none fw-bold">LOGIN</a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
//////////////////////////////
import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { UserContext } from './User'; // Adjust the path as necessary

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { addUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (!username || !email || !password) {
        setError('Please fill in all fields');
      } else {
        // Register user and add to context
        addUser({ username, password });
        console.log("Signing up...");
        setLoading(false);
        navigate('/'); // Redirect to Login page after sign-up
      }
    }, 2000);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: "linear-gradient(135deg, #3b82f6, #ec4899)" }}>
      <div className="card p-4 shadow-lg" style={{ width: "350px", borderRadius: "10px" }}>
        <h3 className="text-center fw-bold">Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <div className="input-group">
              <span className="input-group-text"><FaUser /></span>
              <input type="text" className="form-control" placeholder="Type your username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <div className="input-group">
              <span className="input-group-text"><FaEnvelope /></span>
              <input type="email" className="form-control" placeholder="Type your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text"><FaLock /></span>
              <input type="password" className="form-control" placeholder="Type your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button className="btn w-100 mt-3 text-white" style={{ background: "linear-gradient(90deg, #3b82f6, #ec4899)" }} disabled={loading}>
            {loading ? 'Loading...' : 'SIGN UP'}
          </button>
          <div className="text-center mt-3">
            <span>Already have an account?</span>
            <a href="/" className="d-block text-decoration-none fw-bold">LOGIN</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;