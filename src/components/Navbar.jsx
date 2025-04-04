import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Nishant<span className="text-blue-500">Upadhyay</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8 relative">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>

            {/* Links Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowLinks((prev) => !prev)}
                className= "bg-blue-400 text-white py-1 px-3 rounded font-medium transition relative overflow-hidden hover:bg-red-400 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4) ]"
              >
                Links ▾
              </button>
              {showLinks && (
                <div className="absolute right-0 mt-2 bg-black border border-white/10 rounded-md shadow-lg py-2 z-50 min-w-[160px]">
                  <a
                    href="https://leetcode.com/u/upansh522/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10"
                  >
                    LeetCode
                  </a>
                  <a
                    href="https://codeforces.com/profile/nishant_522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10"
                  >
                    Codeforces
                  </a>
                  <a
                    href="https://www.codechef.com/users/viper_23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10"
                  >
                    CodeChef
                  </a>
                  <a
                    href="https://www.geeksforgeeks.org/user/upanish522/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10"
                  >
                    GFG
                  </a>
                  <a
                    href="https://www.naukri.com/code360/profile/upansh522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10"
                  >
                    CodingNinja
                  </a>

                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
