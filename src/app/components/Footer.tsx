import React from 'react';

export  const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 DevAgency. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-purple-300 hover:text-purple-100 mx-2">Privacy Policy</a>
          <a href="#" className="text-purple-300 hover:text-purple-100 mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};