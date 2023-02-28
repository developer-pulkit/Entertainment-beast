import React from "react";
import "./Header.css";

function Header() {
  return (
    <span
      className="header"
      onClick={() => {
        window.scroll(0, 0);
      }}
    >
      {" "}
      🎬 Entertainment Beast 🦍{" "}
    </span>
  );
}

export default Header;
