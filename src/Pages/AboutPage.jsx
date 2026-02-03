import React from "react";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="homepage">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="logo">Skillora</div>
        <nav className="nav-links">
          <Link to="/" className="no-link-style">HOME</Link>
          <Link to="/about" className="no-link-style">ABOUT</Link>
          <Link to="/login" className="no-link-style">
            <button className="btn-primary">Sign In</button>
          </Link>
        </nav>
      </header>

      {/* ================= ABOUT HERO ================= */}
      <section className="hero">
        <div className="hero-content">
          <h1>About Skillora</h1>
          <p>
            Skillora is a modern freelance marketplace designed to connect
            talented professionals with businesses looking for reliable,
            high-quality services.
          </p>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="features">
        <h2>Who We Are</h2>
        <p style={{ maxWidth: "800px", margin: "20px auto", lineHeight: "1.8" }}>
          Skillora was created to bridge the gap between skilled freelancers and
          clients seeking trusted expertise. Our platform enables secure
          collaboration, transparent payments, and efficient project
          management—all in one place.
        </p>
      </section>

      <section className="stats">
        <div className="stat-card">
          <h3>Our Mission</h3>
          <p>
            To empower freelancers and businesses by providing a secure,
            transparent, and easy-to-use service marketplace.
          </p>
        </div>

        <div className="stat-card">
          <h3>Our Vision</h3>
          <p>
            To become a global platform where skills meet opportunity without
            boundaries.
          </p>
        </div>

        <div className="stat-card">
          <h3>Our Values</h3>
          <p>
            Trust, transparency, quality, and innovation drive everything we do.
          </p>
        </div>
      </section>

      {/* ================= WHY SKILLORA ================= */}
      <section className="features">
        <h2>Why Choose Skillora?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Verified Professionals</h3>
            <p>
              We ensure quality by allowing only verified and skilled freelancers
              on our platform.
            </p>
          </div>
          <div className="feature-card">
            <h3>Secure Transactions</h3>
            <p>
              Payments are protected through escrow to guarantee safety for both
              clients and freelancers.
            </p>
          </div>
          <div className="feature-card">
            <h3>Seamless Collaboration</h3>
            <p>
              Built-in messaging, project tracking, and dispute resolution tools
              simplify collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta">
        <h2>Join Skillora Today</h2><br></br>
        <p>
          Whether you're a freelancer or a client, Skillora helps you achieve
          more—faster and safer.
        </p>
        <br></br>
        <Link to="/login" className="no-link-style">
          <button className="btn-primary">Get Started</button>
        </Link>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        © {new Date().getFullYear()} Skillora. All rights reserved.
      </footer>

    </div>
  );
}

export default AboutPage;
