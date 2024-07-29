const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-fit pt-5  flex justify-center bg-white items-center  "
    >
      <form
        method="POST"
        action="https://getform.io/f/01b5ca71-45e5-46da-a159-c63e110d5d02"
        className="flex flex-col max-w-[600px] w-11/12 sm:w-full"
      >
        <div className="pb-8 leading-10 text-[#f3f3f3] ">
          <p className="text-4xl leading-10  font-bold inline border-b-4 border-[#38b6ff] text-black">
            Schedule a Free Estimate
          </p>
          <ul className="my-4 text-black  sm:text-xl">
            <li>
              <b>Phone</b>: 704-886-8493
            </li>
            <li>
              {" "}
              <b>Hours</b>: 8AM-4PM
            </li>
            <li>
              <b>Questions</b>: For questions about our services or service area
              please feel free to call or fill in your information below and we
              will be in touch!
            </li>
          </ul>
        </div>
        <p className="text-black py-4">
          Submit the form below to set up a free estimate:
        </p>
        <input
          className="p-2 border border-blue-300"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-white border border-blue-300"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-white p-2 border border-blue-300"
          name="message"
          rows="5"
          placeholder="Please tell us a little bit about what you are looking for and let us know what time of day works best for you for a quick chat to set up a home visit."
        ></textarea>
        <button className="text-black border-2 hover:bg-[#4CB9E7] hover:border-[#4CB9E7] px-4 py-3 my-8 mx-auto flex items-center ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
