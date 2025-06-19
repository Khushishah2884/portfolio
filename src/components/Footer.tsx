import React from 'react';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Khushi Shah
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              MERN Stack Developer passionate about creating innovative web solutions and mobile applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Khushishah2884"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/khushi-shah-679071252/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:khushishah0804@gmail.com"
                className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  About Me
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>Email:</strong> khushis2328@gmail.com
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> +91 8799265744
              </p>
              <p className="text-gray-600">
                <strong>Location:</strong> India
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                Available for freelance projects and collaborations
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            © 2025 Khushi Shah. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;