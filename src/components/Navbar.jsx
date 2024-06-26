import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img src={Logo} alt="Logo" className="h-10 w-10 mr-2" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          {/* Links */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          {/* CTA */}
          <div className="hidden lg:flex justify-center items-center space-x-12 ">
            {/* Signin */}
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            {/* Create Account */}
            <a
              href="#"
              className="bg-gradient-to-r from-orange-600 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an Account
            </a>
          </div>

          {/* Responsive Menu */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} className="cursor-pointer">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Links */}
        {menuOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="lg:hidden flex justify-center gap-4 ">
              {/* Signin */}
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              {/* Create Account */}
              <a
                href="#"
                className="bg-gradient-to-r from-orange-600 to-orange-800 py-2 px-3 rounded-md"
              >
                Create an Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
