import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div id="footer">
      <a href="https://github.com/Khushbhase" id="link" target="_blank">
        <p id="icon">
          <iconify-icon
            icon="ph:link-bold"
            style={{ color: "#999" }}
          ></iconify-icon>{" "}
        </p>{" "}
        <span id="text">Open Source | © Khush </span>
      </a>
    </div>
  );
}

export default Footer;
