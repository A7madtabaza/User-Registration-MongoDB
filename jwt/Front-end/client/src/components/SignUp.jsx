import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/register",
        {
          name,
          email,
          password,
        }
      );
      setMessage(response.data.message);
      if (response.data.message === "User registered successfully") {
        navigate("/login");
      }
    } catch (error) {
      setMessage("Registration failed. Please try again.",error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        className="bg-white p-6 rounded-lg shadow-lg w-80"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        {message && <div className="mb-4 text-red-500">{message}</div>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-4 w-full rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-4 w-full rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 w-full rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
