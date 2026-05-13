import React from "react";
import logo from "../assets/goalLogo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-200 px-6 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Side - Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-1 -ml-3">
            <div>
              <img className="w-12" src={logo} alt="Habit Tracker Logo" />
            </div>
            <h2 className="text-xl font-bold">Habit Tracker</h2>
          </div>

          <p className="text-sm text-gray-400">
            Providing reliable habit tracking system since 2026.
          </p>

          <p className="text-sm text-gray-500">
            Built with ❤️ for better habits
          </p>
        </div>

        {/* Right Side - English + Bangla */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* English */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">About</h3>

            <ul className="space-y-2 text-sm text-gray-400">
              <li>✔ Track your daily habits</li>
              <li>✔ Stay motivated every day</li>
              <li>✔ Improve productivity</li>
              <li>✔ Build consistency</li>
            </ul>
          </div>

          {/* Bangla */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">সম্পর্কে</h3>

            <ul className="space-y-2 text-sm text-gray-400">
              <li>✔ প্রতিদিনের অভ্যাস ট্র্যাক করুন</li>
              <li>✔ মোটিভেশন ধরে রাখুন</li>
              <li>✔ প্রোডাক্টিভিটি বাড়ান</li>
              <li>✔ নিয়মিত অভ্যাস গড়ে তুলুন</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"></div>

      <p className="text-xs text-gray-500 text-center">
        © {new Date().getFullYear()} Habit Tracker. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
