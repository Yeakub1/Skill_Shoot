import uber from "../assets/uber.png";
import google from "../assets/google.png";
import paypal from "../assets/paypal.png";
import microsoft from "../assets/microsoft.png";
import dri from "../assets/dri.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Partner() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 md:py-20 py-10">
      <div className="text-center">
        <h1 className="md:text-3xl text-lg font-semibold">
          Trusted more than <span className="text-[#CB8461]">100+</span> in the
          world
        </h1>
        <p className="leading-8 md:w-1/2 m-auto mt-6">
          they have asked us more than 3 times to teach their employees about
          various things. to improve their skills
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="grid grid-cols-2 md:flex gap-5 items-center justify-between mt-12"
      >
        <img className="md:h-10 h-6" src={uber} alt="uber" />
        <img className="md:h-14 h-10" src={google} alt="google" />
        <img className="md:h-14 h-10" src={paypal} alt="paypal" />
        <img className="md:h-16 h-10" src={microsoft} alt="microsoft" />
        <img className="h-8 md:h-10 ml-24 md:ml-0" src={dri} alt="dri" />
      </div>
    </div>
  );
}
