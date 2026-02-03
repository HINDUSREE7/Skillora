import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="login-page">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">Skillora</div>
        <nav className="nav-links">
          <Link to="/" className="no-link-style">HOME</Link>
        </nav>
      </header>

      {/* LOGIN FORM */}
      <div className="login-container">
        <h2>Login to Skillora</h2>
        <p>Welcome back! Please login to your account.</p>

        <form className="login-form">
          <input
            type="email"
            placeholder="Email address"
            required
          />
          <input
            type="password"
            placeholder="Password"
            required
          />

          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>

        {/* 🔹 DON'T HAVE ACCOUNT */}
        <p className="login-footer">
          Don’t have an account?{" "}
          <Link to="/register" className="register-link">
            Register
          </Link>
        </p>
      </div>


     {/* ================= FOOTER ================= */}
      <footer className="footer">
        © {new Date().getFullYear()} Skillora. All rights reserved.
      </footer>

    </div>
  );
}

export default LoginPage;
