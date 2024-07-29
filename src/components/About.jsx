import Est from "../assets/Est.png";
import Local from "../assets/local.png";
import Price from "../assets/price.png";
import Sat from "../assets/sat.png";

const About = () => {
  return (
    <div name="why" className="w-full h-[60%]  bg-#f3f3f3  text-black">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-5xl font-bold inline border-b-4 border-[#4CB9E7] ">
            Why Choose us?
          </p>
          <p className="py-4 text-xl">
            We pride ourselves on providing our customers with the best possible
            experience
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-3 text-center py-8">
          <div className="shadow-md p-2  shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-3 " src={Est} alt="html icon" />
            <p className="my-4 font-bold">Free Estimates</p>
            <p className="my-4">
              No commitment needed for one of experts to come out for a home
              estimate.
            </p>
          </div>
          <div className="shadow-md p-2  shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-3 " src={Local} alt="html icon" />
            <p className="my-4 font-bold">Local Small Buisness</p>
            <p className="my-4">
              We are a small company with the time to treat each customer with
              the highest level of care.
            </p>
          </div>
          <div className="shadow-md p-2  shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-3 " src={Sat} alt="html icon" />
            <p className="my-4 font-bold">Satisfaction Guaranteed</p>
            <p className="my-4">
              Contact us within 2 business days if you are not satisfied with
              the work and we will be back to fix it!
            </p>
          </div>
          <div className="shadow-md p-2  shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-3 " src={Price} alt="html icon" />
            <p className="my-4 font-bold">Competitive Prices</p>
            <p className="my-4">
              We are commited to providing the highest level of care at prices
              that will compete with any local service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
