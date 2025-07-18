// File: src/components/layout/Footer/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-6 border-t border-gray-200 dark:border-gray-700">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Kneil Raven. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;