import React, { useState } from "react";
import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Remove extra spaces
    const cleanUsername = username.trim();

    // Username validation
    if (cleanUsername === "") {
      toast.error("Username is required");
      return;
    }

    if (cleanUsername.length < 3) {
      toast.error("Username must be at least 3 characters");
      return;
    }

    if (cleanUsername.includes(" ")) {
      toast.error("Username cannot contain spaces");
      return;
    }

    // Password validation
    if (password === "") {
      toast.error("Password is required");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (!/\d/.test(password)) {
      toast.error("Password must contain at least one number");
      return;
    }

    // Everything is valid
    toast.success(
      `Username: ${cleanUsername} | Password: ${password}`,
      {
        autoClose: 5000,
      }
    );

    // Clear form
    setUsername("");
    setPassword("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h1>Register</h1>

        <label>Username</label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <ToastContainer />
    </div>
  );
}

export default App;