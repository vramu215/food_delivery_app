import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Login</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password" />
          <div className="text-end mt-2">
            <Link to="/forgot-password" className="text-primary" style={{ textDecoration: 'none' }}>Forgot Password?</Link>
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;
