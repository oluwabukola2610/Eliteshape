import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Join = () => {
  // valide form
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_1nhyuyp", "template_zxaae1s", e.target, "d0yPzCJOO8Wupn6vl")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div id="join" className="flex-col flex lg:flex-row px-6 gap-8 my-12">
      <div className="uppercase relative font-bold text-5xl text-white text-center">
        <hr className="absolute w-[10.5rem] border-[2px] border-orange rounded-md -m-3 md:hidden lg:flex" />
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span className=""> YOUR BODY</span>
          <span className="stroke-text"> WITH US?</span>
        </div>
      </div>

      <div className="justify-center flex items-end gap-3 md:gap-12">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray px-4 py-2 flex gap-8 rounded-md"
        >
          <input
            type="email"
            placeholder="Enter your email"
            name="name_email"
            className="outline-none bg-transparent text-lightgray placeholder:text-lightgray"
          />
          <button className="bg-orange text-white rounded-md  ">join now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
