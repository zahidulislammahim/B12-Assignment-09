import React from "react";

const Contact = () => {
  return (
    <form className="flex flex-col items-center text-sm mt-10 w-10/12 mx-auto">
      <title>Contact</title>
      <h1 className="text-4xl font-semibold pb-4 border-b-2 border-b-[#00a9e7] w-full flex justify-center mb-3">
        Get in touch with us
      </h1>
      <p className="text-sm text-gray-500 text-center pb-10 w-100">
       Have any questions or suggestions? Feel free to reach out to us. We’re always happy to hear from you and will respond as soon as possible.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
        <div className="w-full">
          <label className="" htmlFor="name">
            Your Name
          </label>
          <input
            className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-[#00a9e7] placeholder-gray-400"
            type="text" placeholder="Your Name"
            required
          />
        </div>
        <div className="w-full">
          <label className="" htmlFor="name" >
            Your Email
          </label>
          <input
            className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-[#00a9e7] placeholder-gray-400"
            type="email" placeholder="Your Email Address"
            required
          />
        </div>
      </div>

      <div className="mt-6 w-[350px] md:w-[700px]">
        <label className="" htmlFor="name">
          Message
        </label>
        <textarea
          className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-[#00a9e7] placeholder-gray-400"
          required placeholder="Type Your Massage...."
        ></textarea>
      </div>

      <button
        type="submit"
        className="mt-5 bg-[#00a9e7]  text-white h-12 w-56 px-4 rounded active:scale-95 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default Contact;
