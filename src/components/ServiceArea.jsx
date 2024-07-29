import Map from "../assets/map.png";
import BgImg from "../assets/bg.png";

const ServiceArea = () => {
  return (
    <div
      name="servicearea"
      className="w-full max-md:pb-20 pt-20 pb-20 h-fit flex justify-center  ] text-white"
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" max-md:hidden h-4/6 w-1/3">
        <img className="w-[90%]" src={Map} alt="" />
      </div>
      <ol className="relative border-s h-fit w-1/3 max-md:w-9/12  max-md:mb-10  border-gray-200 dark:border-gray-700">
        <li className="mb-1 ms-1">
          <h3 className="text-5xl font-semibold text-white   dark:text-white">
            Service area
          </h3>
          <p className="mb-4 mt-2 text-base font-normal text-white dark:text-gray-400">
            Locally owned and operated we are proud to clean homes in Charlotte
            and the surrounding areas of:
          </p>
        </li>
        <li className="mb-1 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

          <h3 className="text-lg font-semibold text-white dark:text-white">
            Cornelius
          </h3>
        </li>
        <li className="mb-1 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

          <h3 className="text-lg font-semibold text-white dark:text-white">
            Huntersville
          </h3>
        </li>
        <li className="mb-1 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

          <h3 className="text-lg font-semibold text-white dark:text-white">
            Davidson
          </h3>
        </li>
        <li className="mb-1 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

          <h3 className="text-lg font-semibold text-white dark:text-white">
            Sugar Creek
          </h3>
        </li>
        <li className="mb-1 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

          <h3 className="text-lg font-semibold text-white dark:text-white">
            Caldwell
          </h3>
        </li>
        <li className="mb-1 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

          <h3 className="text-lg font-semibold text-white dark:text-white">
            Concord
          </h3>
        </li>
      </ol>
    </div>
  );
};

export default ServiceArea;
