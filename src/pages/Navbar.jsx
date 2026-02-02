import { Link, NavLink } from "react-router-dom";
import PCR from "../assets/PCR.svg";

function Navbar() {
  return (
    <nav className="sticky top-5 z-50 mx-4 bg-[#0B0B10]/70 backdrop-blur-lg supports-backdrop-filter:bg-[#0B0B10]/60 border border-white/10 rounded-2xl">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-gray-900">
          <img src={PCR} alt="PCR LOGO" className="h-8" />
        </Link>

        <div className="flex gap-6 text-gray-500">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-semibold text-white" : "hover:text-blue-600"
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
