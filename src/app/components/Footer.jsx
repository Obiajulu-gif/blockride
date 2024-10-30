import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="container mx-auto max-w-5xl">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start mb-8">
          
          {/* Logo Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold">Blockride</h2>
            <hr className="border-gray-700 w-full mt-2" />
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#home" className="text-gray-400 hover:text-white transition duration-300">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white transition duration-300">About Us</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact Us</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://twitter.com" aria-label="Twitter" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition duration-300">
              <FaTwitter className="text-white" />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition duration-300">
              <FaFacebookF className="text-white" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition duration-300">
              <FaInstagram className="text-white" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition duration-300">
              <FaLinkedinIn className="text-white" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-4" />

        {/* Bottom Section */}
        <div className="text-center md:text-left text-sm text-gray-400 space-y-2">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-start space-x-3">
              <a href="#privacy" className="hover:text-white">Privacy Policy</a>
              <span>|</span>
              <a href="#terms" className="hover:text-white">Terms & Condition</a>
              <span>|</span>
              <a href="#cookie" className="hover:text-white">Cookie Notice</a>
              <span>|</span>
              <a href="#copyright" className="hover:text-white">Copyright Policy</a>
              <span>|</span>
              <a href="#data" className="hover:text-white">Data Policy</a>
            </div>
          </div>

          {/* Copyright Notice */}
          <p className="mt-4">&copy; 2024 Blockride. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
