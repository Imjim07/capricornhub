"use client";

import {useState } from "react";

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

           <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <a href="#work" style={{ fontSize: "0.85rem", textDecoration: "none", color: "#1a1a1a", opacity: 0.7}}>Work</a>
            <a href="#services" style={{ fontSize: "0.85rem", textDecoration: "none", color: "#1a1a1a", opacity: 0.7}}>Services</a>
            <a href="#products" style={{ fontSize: "0.85rem", textDecoration: "none", color: "#1a1a1a", opacity: 0.7}}>Products</a>
            <a href="#contact" style={{ fontSize: "0.85rem", textDecoration: "none", color: "#1faef6", backgroundColor: "#00423d", padding: "0.6rem 1.5rem", borderRadius: "4px" }}>Start a Project</a>
           </div>
          </nav>
    );
        }