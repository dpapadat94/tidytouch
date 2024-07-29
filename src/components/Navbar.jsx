import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full min-h-[50px] flex justify-between items-center  sticky top-0 z-10 text-white bg-gray-700/80 ">
      <ul className="hidden sm:flex ">
        <li>
          <Link
            className="p-3 cursor-pointer"
            activeClass="active"
            to="services"
            smooth={true}
            duration={300}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className="p-3  cursor-pointer"
            activeClass="active"
            to="why"
            smooth={true}
            duration={300}
          >
            Why us
          </Link>
        </li>
        <li>
          <Link
            activeClass="active "
            to="servicearea"
            smooth={true}
            duration={300}
            className="p-3  cursor-pointer"
          >
            Service Area
          </Link>
        </li>
        <li>
          <Link
            className="p-3  cursor-pointer"
            activeClass="active"
            to="contact"
            smooth={true}
            duration={300}
          >
            Contact
          </Link>
        </li>
      </ul>
      <Link
        to="contact"
        smooth={true}
        duration={300}
        className="cursor-pointer bg-transparent hover:bg-[#38B6FF] text-white font-semibold hover:text-white mr-2 py-2 px-4 border border-[#38B6FF] hover:border-transparent rounded"
      >
        Get a Free Estimate
      </Link>

      {/* mobile menu */}
      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full   w-full text-center pt-12">
          <li>
            <Link
              onClick={handleNav}
              className="p-3 text-xl"
              activeClass="active"
              to="services"
              smooth={true}
              duration={300}
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              onClick={handleNav}
              className="p-3 text-xl"
              activeClass="active"
              to="why"
              smooth={true}
              duration={300}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={handleNav}
              activeClass="active"
              to="servicearea"
              smooth={true}
              duration={300}
              className="p-3 text-xl"
            >
              Service Area
            </Link>
          </li>
          <li>
            <Link
              onClick={handleNav}
              className="p-3 text-xl"
              activeClass="active"
              to="contact"
              smooth={true}
              duration={300}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
