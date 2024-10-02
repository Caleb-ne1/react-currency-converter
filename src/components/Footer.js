import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold">Caleb Kibet</h4>
          <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <h5 className="font-semibold">Follow Me:</h5>
          <div className="flex justify-center md:justify-end space-x-4 mt-2">
            <a href="https://www.linkedin.com/in/caleb-kibet" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-300 transition" />
            </a>
            <a href="https://github.com/Caleb-ne1" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-blue-300 transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
