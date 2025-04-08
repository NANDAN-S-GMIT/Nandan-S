import React from "react";

const Footer = () => {
  const icons = [
    {
      href: "https://github.com/NANDAN-S-GMIT",
      icon: "M12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm5.66 9.66c.01-.01.01-.03 0-.04-.01-.01-.03-.01-.04 0-.36.36-1.06.34-1.42-.02l-2.2-2.2c-.39-.39-1.02-.39-1.41 0l-2.2 2.2c-.36.36-1.06.38-1.42.02-.01-.01-.03-.01-.04 0-.01.01-.01.03 0 .04 1.42 1.42 3.72 1.42 5.14 0l2.2-2.2 2.2 2.2c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-2.2-2.2z",
    },
    {
      href: "https://www.linkedin.com/in/nandan-s007/",
      icon: "M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.5c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 12.5h-3v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v5.5h-3v-11h3v1.5c.88-.68 1.98-1 3.5-1 2.76 0 5 2.24 5 5v5.5z",
    },
    {
      href: "mailto:benz.nandan.s@gmail.com",
      icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
    },
  ];

  return (
    <footer className="bg-gray-900 py-6 sm:py-8 z-10 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-lg sm:text-xl font-bold text-white">
              <span className="text-blue-400">Full-Stack</span> Web Developer
            </a>
          </div>

          <div className="flex space-x-4 sm:space-x-6">
            {icons.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 p-2 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="cursor-pointer"
                >
                  <path d={item.icon} />
                </svg>
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {new Date().getFullYear()} All rights reserved. Designed with ❤️ by{" "}
              <a href="#home" className="text-blue-400">
                Nandan S
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
