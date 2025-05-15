import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {year} Keanu Stobbe</p>
    </footer>
  );
}

export default Footer;
