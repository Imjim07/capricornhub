"use client";

import {useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav style={{
position: "fixed",
top: 0,
left: 0,
right: 0,
zIndex: 100,
backgroundColor: "#faefe6",
borderBottom: "1px solid #d4c9bc",
padding: "1.25rem 2.5rem",
display: "flex",
alignItems: "center",
justifyContent: "space-between",
}}>
           <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "#00423d" }}>
            Capricorn Hub
           </span>

           <div className="desktop-nav" style={{ display: "flex", gap: "2rem", alignItems: "center"}}>
            <a href="#work" style={{ fontSize: "0.85rem", textDecoration: "none", color: "#1a1a1a", opacity: 0.7}}>Work</a>
            <a href="#services" style={{ fontSize: "0.85rem", textDecoration: "none", color: "#1a1a1a", opacity: 0.7}}>Services</a>
            <a href="#products" style={{ fontSize: "0.85rem", textDecoration: "none", color: "#1a1a1a", opacity: 0.7}}>Products</a>
            <a href="#contact" style={{ fontSize: "0.85rem", textDecoration: "none", color: "#faefe6", backgroundColor: "#00423d", padding: "0.6rem 1.5rem", borderRadius: "4px" }}>Start a Project</a>
           </div>

           <button
        onClick={() => setOpen(!open)}
        className="mobile-menu-btn"
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: 600,
          color: "#00423d",
        }}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div style={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          backgroundColor: "#faefe6",
          borderBottom: "1px solid #d4c9bc",
          padding: "1.5rem 2.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}>
          <a href="#work" onClick={() => setOpen(false)} style={{ fontSize: "1rem", fontWeight: 500, color: "#1a1a1a", textDecoration: "none" }}>Work</a>
          <a href="#services" onClick={() => setOpen(false)} style={{ fontSize: "1rem", fontWeight: 500, color: "#1a1a1a", textDecoration: "none" }}>Services</a>
          <a href="#products" onClick={() => setOpen(false)} style={{ fontSize: "1rem", fontWeight: 500, color: "#1a1a1a", textDecoration: "none" }}>Products</a>
          <a href="#contact" onClick={() => setOpen(false)} style={{ fontSize: "0.9rem", fontWeight: 600, color: "#faefe6", backgroundColor: "#00423d", padding: "0.6rem 1.5rem", textDecoration: "none", borderRadius: "4px", display: "inline-block" }}>Start a Project</a>
        </div>
      )}
          </nav>
    );
        }