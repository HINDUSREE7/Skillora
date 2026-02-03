import React from "react";
import { Link } from "react-router-dom";
import "../AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-dashboard">

      {/* ================= SIDEBAR ================= */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">Skillora Admin</h2>

        <nav className="admin-nav">
          <Link to="#" className="active">Dashboard</Link>
          <Link to="#">Users</Link>
          <Link to="#">Freelancers</Link>
          <Link to="#">Projects</Link>
          <Link to="#">Payments</Link>
          <Link to="#">Disputes</Link>
          <Link to="#">Reports</Link>
          <Link to="/">Logout</Link>
        </nav>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="admin-main">

        {/* TOP BAR */}
        <header className="admin-header">
          <h1>Dashboard Overview</h1>
          <span>Admin Panel</span>
        </header>

        {/* STATS CARDS */}
        <section className="admin-stats">
          <div className="admin-card">
            <h3>Total Users</h3>
            <p>12,450</p>
          </div>
          <div className="admin-card">
            <h3>Freelancers</h3>
            <p>7,320</p>
          </div>
          <div className="admin-card">
            <h3>Active Projects</h3>
            <p>1,284</p>
          </div>
          <div className="admin-card">
            <h3>Total Revenue</h3>
            <p>$245,000</p>
          </div>
        </section>

        {/* RECENT ACTIVITY */}
        <section className="admin-section">
          <h2>Recent Activity</h2>

          <table className="admin-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Action</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>Client</td>
                <td>Posted Project</td>
                <td className="status success">Completed</td>
              </tr>
              <tr>
                <td>Sarah Smith</td>
                <td>Freelancer</td>
                <td>Submitted Proposal</td>
                <td className="status pending">Pending</td>
              </tr>
              <tr>
                <td>Michael Lee</td>
                <td>Client</td>
                <td>Payment Released</td>
                <td className="status success">Success</td>
              </tr>
            </tbody>
          </table>
        </section>

      </main>
    </div>
  );
}

export default AdminDashboard;
