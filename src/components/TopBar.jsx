import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";

import logo from "../assets/logo.png";
const TopBar = () => {
  return (
    <div className="flex bg-white  justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <h4 className="md:inline lg:text-4xl text-3xl ml-2 text-[#38B6FF] ">
          Tidy Touch
        </h4>
        <img src={logo} alt="" className="mr-2 w-12" />
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle
            size={20}
            className="mr-2 text-[var(--primary-dark)]"
          />
          <p className="text-sm text-gray-700">8AM-4PM</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={30} className="mr-2 text-[var(--primary-dark)]" />
          <p className="text-sm text-gray-700">704-886-8493</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
