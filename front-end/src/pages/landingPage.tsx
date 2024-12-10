import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const LandingPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20 px-4 text-center">
        <div className="relative">
          <img
            src="/crops.jpg"
            alt="Hero"
            className="w-full h-64 object-cover rounded-md shadow-lg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-green-600 bg-opacity-60">
            <h1 className="text-4xl font-bold">
              Empowering Farmers with Knowledge
            </h1>
            <p className="mt-4 text-lg">
              Get localized agricultural advice and real-time weather updates to
              maximize your yield.
            </p>
            <div className="mt-6">
              <button className="bg-yellow-400 text-green-800 font-semibold py-2 px-6 rounded hover:bg-yellow-500">
                Learn More
              </button>
              <button className="ml-4 bg-white text-green-600 font-semibold py-2 px-6 rounded hover:bg-gray-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-green-800">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <div className="p-6 bg-gray-100 rounded shadow">
            <img
              src="/crops.jpg"
              alt="Localized Advice"
              className="w-full h-32 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-green-700 mt-4">
              Localized Advice
            </h3>
            <p className="mt-2 text-gray-600">
              Access expert agricultural guidance tailored to your region and
              language.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded shadow">
            <img
              src="/coffee.jpg"
              alt="Weather Updates"
              className="w-full h-32 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-green-700 mt-4">
              Weather Updates
            </h3>
            <p className="mt-2 text-gray-600">
              Stay ahead with real-time forecasts and alerts.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded shadow">
            <img
              src="/tractor.jpg"
              alt="Multilingual Support"
              className="w-full h-32 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-green-700 mt-4">
              Multilingual Support
            </h3>
            <p className="mt-2 text-gray-600">
              Information in your preferred language for better understanding.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded shadow">
            <img
              src="/seeds.jpg"
              alt="Subscription Plans"
              className="w-full h-32 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-green-700 mt-4">
              Subscription Plans
            </h3>
            <p className="mt-2 text-gray-600">
              Affordable plans to meet every farmer's needs.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center space-y-4">
          {/* Brand and Description */}
          <div>
            <h3 className="text-lg font-semibold">Smart Agriculture</h3>
            <p className="text-sm text-gray-400">
              Empowering farmers with real-time advice and sustainable
              solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="/about"
              className="text-sm text-gray-300 hover:text-white transition duration-200"
            >
              About Us
            </a>
            <a
              href="/privacy-policy"
              className="text-sm text-gray-300 hover:text-white transition duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-sm text-gray-300 hover:text-white transition duration-200"
            >
              Terms of Service
            </a>
            <a
              href="/contact"
              className="text-sm text-gray-300 hover:text-white transition duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Social Media Links */}
          {/* Social Media Links */}
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com/smartagriculture"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition duration-200"
            >
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
            <a
              href="https://twitter.com/smartagriculture"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition duration-200"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a
              href="https://instagram.com/smartagriculture"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 transition duration-200"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a
              href="https://linkedin.com/company/smartagriculture"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-600 transition duration-200"
            >
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © 2024 Smart Agriculture. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
