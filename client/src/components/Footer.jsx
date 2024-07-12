import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className="text-center">Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
