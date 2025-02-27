import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Appropriate Tech Solutions. All rights reserved.</p>
      <p>Empowering businesses with no-code and automation.</p>
    </footer>
  );
};

export default Footer;
