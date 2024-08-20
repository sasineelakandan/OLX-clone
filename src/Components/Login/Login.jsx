/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import Logo from "../../olx-logo.png";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const { user, logIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let res = await logIn(email, password);
    if (res.success) {
      toast.success("signup successfull");
    } else {
      setLoading(false);
      toast.error("Email or Password is incorrect");
    }
  };

  if (user) {
    navigate("/");
    return null;
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <Toaster />

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">
            Login
            {loading && <div className="spinner"></div>}
          </button>
        </form>
        <Link to="/signup">Create an account</Link>
      </div>
    </div>
  );
}

export default Login;
