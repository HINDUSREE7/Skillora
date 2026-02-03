import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";

// Dummy placeholder components (you can replace later)
const Services = () => <h2 style={{ padding: "40px" }}>Services Page</h2>;
const Profile = () => <h2 style={{ padding: "40px" }}>Expert Profile Page</h2>;
const Reviews = () => <h2 style={{ padding: "40px" }}>Reviews Page</h2>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserDashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/reviews/:id" element={<Reviews />} />
      </Routes>
    </Router>
  );
};

export default App;
