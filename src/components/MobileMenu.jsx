import { useState } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const [showLinks, setShowLinks] = useState(false);

  const codingLinks = [
    { name: "LeetCode", url: "https://leetcode.com/u/upansh522/" },
    { name: "Codeforces", url: "https://codeforces.com/profile/nishant_522" },
    { name: "CodeChef", url: "https://www.codechef.com/users/viper_23" },
    { name: "GFG", url: "https://www.geeksforgeeks.org/user/upanish522/" },
    { name: "CodingNinja", url: "https://www.naukri.com/code360/profile/upansh522" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
      `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {["Home", "About", "Projects", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
        >
          {item}
        </a>
      ))}

      {/* Links Button */}
      <div className="relative mt-4">
        <button
          onClick={() => setShowLinks((prev) => !prev)}
          className="bg-blue-400 text-white py-1 px-4 rounded font-medium transition relative overflow-hidden hover:bg-red-400 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
        >
          Links ▾
        </button>

        {showLinks && (
          <div className="mt-4 bg-black border border-white/10 rounded-md shadow-lg py-2 z-50 w-52">
            {codingLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 text-center"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
