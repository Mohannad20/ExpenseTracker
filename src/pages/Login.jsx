// src/pages/Login.js
import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

function Login() {
  const { login, user, loading } = useAuth(); // Access login function from useAuth
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (user) return <div>Welcome, {user.email}!</div>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
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
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
