import { Link } from "react-scroll";
import BgImg from "../assets/bg.png";

const Services = () => {
  return (
    <div
      name="services"
      className="w-full flex flex-col gap-3 items-center min-h-fit p-4 "
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className=" text-6xl text-white font-bold p-2 pb-4 text-center">
        Services
      </h1>
      <h2 className=" text-2xl text-white font-bold p-2 pb-4 text-center">
        Our Packages for Weekly Customers
      </h2>
      <div className=" flex flex-col justify-center items-center gap-5 md:flex-row">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
          <h5 className="mb-2 text-3xl font-bold text-gray-500">
            Standard Cleaning
          </h5>
          <div className="flex items-baseline text-gray-900 pb-4 ">
            <span className="text-2xl  font-semibold">Starting at $</span>
            <span className="text-2xl font-extrabold tracking-tight">105</span>
            <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /week
            </span>
          </div>
          <ul role="list" className="space-y-1.5">
            <li className="flex p-2 items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-[var(--primary-dark)]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                Sweep and mop all floors
              </span>
            </li>
            <li className="flex p-2">
              <svg
                className="flex-shrink-0 w-4 h-4 text-[var(--primary-dark)]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                Vacuum carpets
              </span>
            </li>
            <li className="flex p-2">
              <svg
                className="flex-shrink-0 w-4 h-4 text-[var(--primary-dark)]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                Dust tables and wall pictures
              </span>
            </li>
            <li className="flex decoration-gray-500 p-2">
              <svg
                className="flex-shrink-0 w-4 h-4 text-[var(--primary-dark)]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                Clean all bathroom toilets, counters, sinks, mirrors and tubs
              </span>
            </li>
            <li className="flex  decoration-gray-500 p-2">
              <svg
                className="flex-shrink-0 w-4 h-4 text-[var(--primary-dark)]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                Wipe down kitchen appliances
              </span>
            </li>
            <li className="flex line-through decoration-gray-500 p-2">
              <svg
                className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                All cabinets washed front and sides (kitchen and bath)
              </span>
            </li>
            <li className="flex line-through p-2 decoration-gray-500">
              <svg
                className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                Steam clean linoleum/tile floors
              </span>
            </li>
            <li className="flex line-through p-2 decoration-gray-500">
              <svg
                className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                Wash all windows and casings
              </span>
            </li>
          </ul>
          <Link
            to="contact"
            smooth={true}
            duration={300}
            className="cursor-pointer text-white bg-[#38b6ff]  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center mt-3"
          >
            Schedule an Estimate
          </Link>
        </div>
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
          <h5 className="mb-2 text-3xl  font-bold text-[var(--primary-dark)]">
            Deep Cleaning
          </h5>
          <div className="flex items-baseline text-gray-900 pb-4 ">
            <span className="text-2xl   font-semibold">Starting at $</span>
            <span className="text-2xl font-extrabold tracking-tight">200</span>
            <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /week
            </span>
          </div>
          <ul role="list" className="space-y-1.5">
            <li className="flex items-center p-2">
              <svg
                className="flex-shrink-0 w-4 h-4 text-[var(--primary-dark)]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-bold leading-tight text-gray-500 ms-3">
                All Standard Cleaning Service
              </span>
            </li>
            <li className="flex p-2">
              <svg
                className="flex-shrink-0 w-4 h-4 text-[var(--primary-dark)]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                Steam clean linoleum / tile floors
              </span>
            </li>
            <li className="flex p-2">
              <svg
                className="flex-shrink-0 w-4 h-4 text-[var(--primary-dark)]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                All cabinets washed front and sides (kitchen and bath)
              </span>
            </li>
            <li className="flex decoration-gray-500 p-2">
              <svg
                className="flex-shrink-0 w-4 h-4 text-[var(--primary-dark)]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                Wash all windows and casings
              </span>
            </li>
            <li className="flex  p-2 decoration-gray-500">
              <svg
                className="flex-shrink-0 w-4 h-4 text-[var(--primary-dark)]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                All corners of walls, ceilings and baseboard areas cleaned.
              </span>
            </li>
            <li className="flex p-2 decoration-gray-500">
              <svg
                className="flex-shrink-0 w-4 h-4 text-[var(--primary-dark)]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                Dusting of blinds
              </span>
            </li>
            <li className="flex p-2  decoration-gray-500">
              <svg
                className="flex-shrink-0 w-4 h-4 text-[var(--primary-dark)]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                Move in/out deep cleaning
              </span>
            </li>
            <li className="flex p-2 decoration-gray-500">
              <svg
                className="flex-shrink-0 w-4 h-4 text-[var(--primary-dark)]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                Extra Team member
              </span>
            </li>
          </ul>
          <Link
            to="contact"
            smooth={true}
            duration={300}
            className="cursor-pointer text-white bg-[#38b6ff]  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center mt-3 pointer"
          >
            Schedule an Estimate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
