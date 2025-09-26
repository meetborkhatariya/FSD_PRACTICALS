import React from "react";
import "./Sidebar.css";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        &times;
      </button>
      <ul>
        <li><a href="#home" onClick={toggleSidebar}>Home</a></li>
        <li><a href="#about" onClick={toggleSidebar}>About</a></li>
        <li><a href="#services" onClick={toggleSidebar}>Services</a></li>
        <li><a href="#contact" onClick={toggleSidebar}>Contact</a></li>
      </ul>
    </div>
  );
}
