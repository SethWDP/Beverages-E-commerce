import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <h2 className="text-2xl font-bold text-blue-500 mb-2">
              Daily Drink
            </h2>
            <p className="text-sm mb-4 text-[#6b6b6b]">
              Daily Drink – Refresh your day with the best beverages, anytime,
              anywhere.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Shop Now
            </a>
          </div>

          {/* Category Column */}
          <nav>
            <h3 className="text-lg font-semibold text-[#6b6b6b] mb-4">
              Category
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#6b6b6b] hover:text-blue-500 transition-colors duration-300"
                >
                  Water & Hydration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#6b6b6b] hover:text-blue-500 transition-colors duration-300"
                >
                  Vitamins & Supplements
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#6b6b6b] hover:text-blue-500  transition-colors duration-300"
                >
                  Snacks & Beverages
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#6b6b6b] hover:text-blue-500  transition-colors duration-300"
                >
                  Dairy & Alternatives
                </a>
              </li>
            </ul>
          </nav>

          {/* Useful Links Column */}
          <nav>
            <h3 className="text-lg font-semibold text-[#6b6b6b] mb-4">
              Useful-Link
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#6b6b6b] hover:text-blue-500  transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#6b6b6b] hover:text-blue-500  transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#6b6b6b] hover:text-blue-500  transition-colors duration-300"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#6b6b6b] hover:text-blue-500  transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact Column */}
          <address className="not-italic">
            <h3 className="text-lg font-semibold text-[#6b6b6b] mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="text-[#6b6b6b]">
                271 #street,Phnom Penh, Cambodia
              </li>
              <li className="text-[#6b6b6b]">012 3456 78 / 086 789 987</li>
              <li className="text-[#6b6b6b]">info@example.com</li>
            </ul>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-[#6b6b6b] hover:text-blue-500  transition-colors duration-300"
              >
                <FaFacebookF size="1.2rem" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-[#6b6b6b] hover:text-blue-500  transition-colors duration-300"
              >
                <FaTwitter size="1.2rem" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-[#6b6b6b] hover:text-blue-500  transition-colors duration-300"
              >
                <FaInstagram size="1.2rem" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-[#6b6b6b] hover:text-blue-500  transition-colors duration-300"
              >
                <FaLinkedinIn size="1.2rem" />
              </a>
            </div>
          </address>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-blue-500 text-center text-white py-4 mt-8">
        <p className="text-sm">© Copyright Daily Drink. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
