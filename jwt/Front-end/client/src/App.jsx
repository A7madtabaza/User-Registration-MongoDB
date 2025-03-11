import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        {/* إضافة روابط التنقل */}
        <nav>
          <ul>
            <li>
              <Link to="/">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
