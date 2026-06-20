"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

async function handleSubmit() {
  if (name && email && message) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

  return (
    <section id="contact" style={{
      backgroundColor: "#faefe6",
      padding: "8rem 2.5rem",
    }}>
      <p style={{
        fontSize: "0.75rem",
        fontWeight: 600,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#00423d",
        opacity: 0.6,
        marginBottom: "1rem",
      }}>
        Start a Project
      </p>

      <h2 style={{
        fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
        fontWeight: 800,
        color: "#1a1a1a",
        letterSpacing: "-0.02em",
        marginBottom: "4rem",
      }}>
        Tell us what you need.
      </h2>

      {sent ? (
        <div style={{
          backgroundColor: "#00423d",
          borderRadius: "8px",
          padding: "3rem",
          maxWidth: "600px",
        }}>
          <h3 style={{
            fontSize: "1.3rem",
            fontWeight: 700,
            color: "#faefe6",
            marginBottom: "0.75rem",
          }}>
            Message received.
          </h3>
          <p style={{
            fontSize: "0.9rem",
            color: "#faefe6",
            opacity: 0.7,
          }}>
            We will get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div>
            <label style={{
              display: "block",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#1a1a1a",
              opacity: 0.5,
              marginBottom: "0.5rem",
            }}>
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "0.85rem 1rem",
                fontSize: "0.95rem",
                border: "1px solid rgba(0,66,61,0.2)",
                borderRadius: "4px",
                backgroundColor: "#ffffff",
                color: "#1a1a1a",
                outline: "none",
              }}
            />
          </div>

          <div>
            <label style={{
              display: "block",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#1a1a1a",
              opacity: 0.5,
              marginBottom: "0.5rem",
            }}>
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "0.85rem 1rem",
                fontSize: "0.95rem",
                border: "1px solid rgba(0,66,61,0.2)",
                borderRadius: "4px",
                backgroundColor: "#ffffff",
                color: "#1a1a1a",
                outline: "none",
              }}
            />
          </div>

          <div>
            <label style={{
              display: "block",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#1a1a1a",
              opacity: 0.5,
              marginBottom: "0.5rem",
            }}>
              Tell us about your project
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              style={{
                width: "100%",
                padding: "0.85rem 1rem",
                fontSize: "0.95rem",
                border: "1px solid rgba(0,66,61,0.2)",
                borderRadius: "4px",
                backgroundColor: "#ffffff",
                color: "#1a1a1a",
                outline: "none",
                resize: "vertical",
              }}
            />
          </div>

          <button
            onClick={() => handleSubmit()}
            style={{
              padding: "0.85rem 2rem",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#faefe6",
              backgroundColor: "#00423d",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              alignSelf: "flex-start",
            }}
          >
            Send Message
          </button>
        </div>
      )}
    </section>
  );
}