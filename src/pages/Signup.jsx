// src/pages/Signup.js
import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

function Signup() {
  const { signup, user, loading } = useAuth(); // Access signup function from useAuth
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
    } catch (err) {
      setError("Failed to create an account");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (user) return <div>Welcome, {user.email}!</div>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;
