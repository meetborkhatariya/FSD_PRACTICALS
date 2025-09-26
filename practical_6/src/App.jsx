import React, { useState } from "react";
import Sidebar from "./sidebar";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
      <button className="menu-btn" onClick={toggleSidebar}>
        &#9776; Menu
      </button>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="content">
        <section id="home"><h2>Home Section</h2></section>
        <section id="about"><h2>About Section</h2></section>
        <section id="services"><h2>Services Section</h2></section>
        <section id="contact"><h2>Contact Section</h2></section>
      </div>
    </div>
  );
}

export default App;
