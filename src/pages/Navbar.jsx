import { Link, NavLink } from "react-router-dom";
import PCR from "../assets/PCR.svg";

function Navbar() {
  return (
    <nav className="sticky top-5 z-50 mx-4 xl:mx-110 bg-[#0B0B10]/70 backdrop-blur-lg supports-backdrop-filter:bg-[#0B0B10]/60 border border-[#1f2330] rounded-2xl">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Title */}
        <Link to="/" className="group flex items-center gap-3">
          <img
            src={PCR}
            alt="PCR LOGO"
            className="
                h-8
                transition-all duration-300 ease-out
                group-hover:scale-110
                group-hover:rotate-6
                group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.7)]
                "
          />

          <span className="text-white font-semibold tracking-wide">
            บทความพชร
          </span>
        </Link>

        {/* Menu */}
        <div className="flex gap-6 text-gray-500">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-semibold text-white" : "hover:text-blue-500"
            }
          >
            บทความทั้งหมด
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
