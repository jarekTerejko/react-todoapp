import React from "react";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getUTCFullYear();

  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          <p>&copy; Jarosław Terejko {year}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
