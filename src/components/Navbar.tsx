import { Link, useLocation } from "react-router-dom";
import { Dumbbell, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Trainers", path: "/trainers" },
    { name: "Membership", path: "/memberships" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col items-center px-4 pt-[20px] transition-all duration-300">
      <nav
        className={cn(
          "relative flex items-center justify-between w-full max-w-[1100px] rounded-full border border-white/15 transition-all duration-300 ease-in-out",
          scrolled
            ? "bg-[#141414]/60 backdrop-blur-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2 px-6 scale-[0.98]"
            : "bg-[#141414]/45 backdrop-blur-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.6)] py-[12px] px-[28px] scale-100"
        )}
      >
        {/* Left: Logo */}
        <Link to="/" className="flex items-center space-x-2 text-white group">
          <Dumbbell className="h-7 w-7 text-yellow-600 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
          <span className="text-xl font-bold tracking-tighter uppercase">
            Forza<span className="text-yellow-600">Fitness</span>
          </span>
        </Link>

        {/* Center: Links */}
        <div className="hidden md:flex items-center gap-[24px]">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "group relative text-sm font-medium uppercase tracking-wider transition-all duration-300 ease-in-out hover:text-yellow-600 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]",
                  isActive ? "text-yellow-600" : "text-gray-300"
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-full h-[2px] bg-yellow-600 rounded-full transition-all duration-300 ease-in-out",
                    isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                  )}
                  style={{ transformOrigin: "left center" }}
                />
              </Link>
            );
          })}
        </div>

        {/* Right: CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/memberships"
            className="hidden md:inline-flex items-center justify-center bg-yellow-600 text-white px-6 py-2 rounded-full font-bold uppercase tracking-wider transition-all duration-300 ease-in-out hover:scale-105 hover:bg-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]"
          >
            Join Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-yellow-600 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute top-[calc(100%+10px)] left-4 right-4 max-w-[1100px] mx-auto bg-[#141414]/80 backdrop-blur-[20px] border border-white/15 rounded-2xl overflow-hidden transition-all duration-300 ease-in-out md:hidden shadow-[0_10px_30px_rgba(0,0,0,0.6)]",
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="flex flex-col p-4 space-y-2">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-xl text-sm font-medium uppercase tracking-wider transition-all duration-300",
                  isActive
                    ? "bg-yellow-600/10 text-yellow-600"
                    : "text-gray-300 hover:bg-white/5 hover:text-yellow-600"
                )}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            to="/memberships"
            onClick={() => setIsOpen(false)}
            className="mt-4 flex items-center justify-center bg-yellow-600 text-white px-6 py-3 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 hover:bg-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]"
          >
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
}
