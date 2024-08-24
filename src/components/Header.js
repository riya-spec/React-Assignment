// src/components/Header.js
import React, { useState } from "react";

const Header = () => {
  const [activeTab, setActiveTab] = useState("One");
  const [menuActive, setMenuActive] = useState(false);

  const handleClick = (tab) => {
    setActiveTab(tab);
    setMenuActive(false); // Close the menu when an item is clicked
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <nav>
        <div className={`menu ${menuActive ? "active" : ""}`}>
          <button onClick={() => handleClick("One")}>One</button>
          <button onClick={() => handleClick("Two")}>Two</button>
          <button onClick={() => handleClick("Three")}>Three</button>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}></div>
      </nav>
      <div className="content">
        {activeTab === "One" && <div>Content for One</div>}
        {activeTab === "Two" && <div>Content for Two</div>}
        {activeTab === "Three" && <div>Content for Three</div>}
      </div>
    </header>
  );
};

export default Header;
