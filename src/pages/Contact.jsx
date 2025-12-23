import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  // form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");

    // clear fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "white",
        minHeight: "100vh",
      }}
    >
      {/* Contact Us Headline */}
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Contact Us</h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "1.2rem",
          fontWeight: "lighter",
        }}
      >
        Have Questions? Let us know how we can help you.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Contact Information */}
        <div
          style={{
            flex: "1 1 300px",
            padding: "20px",
            background: "#f4f4f4",
            borderRadius: "12px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Contact Information</h2>
          <br />
          <br />
          <p>
            <FaMapMarkerAlt style={{ marginRight: "8px", color: "#53b018" }} />
            126 Street, block-116, Mohali, India
          </p>
          <br />
          <p>
            <FaEnvelope style={{ marginRight: "8px", color: "#53b018" }} />
            support@shiwansh.com
          </p>
          <br />
          <p>
            <FaPhone style={{ marginRight: "8px", color: "#53b018" }} />
            +91 9876543210
          </p>
        </div>

        {/* Send a Message */}
        <div
          style={{
            flex: "1 1 300px",
            padding: "20px",
            background: "#f4f4f4",
            borderRadius: "12px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Send a Message</h2>
          <br />
          <br />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />

            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
              rows={4}
            ></textarea>

            <button
              type="submit"
              style={{
                padding: "10px 20px",
                background: "#53b018",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* ⭐ Full-width image section below contact info and above footer */}
      <div
        style={{
          width: "100%",
          marginTop: "50px",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <img
          src="https://media.istockphoto.com/id/664259424/vector/email-envelope-cover-icons-communication-and-office-correspondence-blank-cover-address-design.jpg?s=2048x2048&w=is&k=20&c=v4BvfYLuyXGHKh2ZkHVxc0M7lLSoznVwn04FUcfCXcg="
          alt="Contact Banner"
          style={{ width: "100%", height: "210px", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

export default Contact;






