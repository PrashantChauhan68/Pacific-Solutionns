import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Logged in!");
    setShowLogin(false);
    setEmail("");
    setPassword("");
    setIsUser(true);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Signup Successful! Now you can log in.");
    setShowSignup(false);
    setEmail("");
    setPassword("");
    setIsUser(true);
  };

  // Default link style
  const linkStyle = {
    color: "black",
    textDecoration: "none",
    padding: "8px 12px",
    fontWeight: 500,
  };

  // Active link style (text color change only)
  const activeLinkStyle = {
    color: "blue",
  };

  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 100px 25px",
          background: "White",
          color: "white",
          position: "sticky",
          top: 0,
          zIndex: 1000,
           boxShadow: "0 4px 8px rgba(53, 4, 249, 0.1)",
        }}
      >
        <h2 style={{ margin: 0, color: "black",fontWeight:"lighter",paddingLeft:"80px" }}>
  <span style={{ color: "blue",fontWeight:"bold" }}>Pacific</span> Solutions
</h2>


        <nav style={{ display: "flex", gap: "30px", alignItems: "center",fontWeight:"bolder", marginLeft:"25px" }}>
          <NavLink to="/" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}>
            Home
          </NavLink>
          <NavLink to="/about" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}>
            About
          </NavLink>
             <NavLink to="/internship" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}>
            Internship
          </NavLink>
          <NavLink to="/news" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}>
            Blogs
          </NavLink>
          <NavLink to="/contact" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}>
            Contact
          </NavLink>
          

          {isUser ? (
            <button onClick={() => setShowLogin(true)} style={{ color: "#0c1c53ff", background: "transparent", border: "1px solid white", padding: "6px 25px", borderRadius: "6px", cursor: "pointer" }}>
              Login
            </button>
          ) : (
            <button onClick={() => setShowSignup(true)} style={{ color: "#0e1f57ff", background: "transparent", border: "1px solid black", padding: "6px 25px", borderRadius: "6px", cursor: "pointer" }}>
              Signup
            </button>
          )}
        </nav>
      </header>

      {/* SIGNUP & LOGIN POPUPS */}
      {showSignup && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 2000 }}>
          <div style={{ width: "350px", padding: "25px", background: "white", borderRadius: "10px", textAlign: "center" }}>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
              <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "6px", border: "1px solid #ccc" }} />
              <input type="password" placeholder="Create Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "6px", border: "1px solid #ccc" }} />
              <button type="submit" style={{ width: "100%", padding: "10px", background: "#53b018", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", marginTop: "10px" }}>Signup</button>
              <button type="button" onClick={() => setShowSignup(false)} style={{ width: "100%", padding: "10px", background: "#ccc", color: "#222", border: "none", borderRadius: "6px", cursor: "pointer", marginTop: "10px" }}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {showLogin && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 2000 }}>
          <div style={{ width: "350px", padding: "25px", background: "white", borderRadius: "10px", textAlign: "center" }}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "6px", border: "1px solid #ccc" }} />
              <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "6px", border: "1px solid #ccc" }} />
              <button type="submit" style={{ width: "100%", padding: "10px", background: "#53b018", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", marginTop: "10px" }}>Login</button>
              <button type="button" onClick={() => setShowLogin(false)} style={{ width: "100%", padding: "10px", background: "#ccc", color: "#222", border: "none", borderRadius: "6px", cursor: "pointer", marginTop: "10px" }}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}










