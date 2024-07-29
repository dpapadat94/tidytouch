import cover from "../assets/heropic.png";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img src={cover} alt="" className="w-full h-full object-cover" />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[30%] w-full md:top-[40%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-5xl mb-3">Clean You Can Count on </h1>
          <p className=" sm:text-xl sm:flex sm:leading-8">
            Whether it’s a one-time deep clean or regular upkeep, we’re here to
            ensure your home shines with comfort and cleanliness. Contact us
            today for a free consultation
          </p>
          <h2 className="text-3xl py-4 font-bold italic">
            Call Today <span className=" text-[#38b6ff]">704-886-8493</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
