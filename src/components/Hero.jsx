import { FaDiscord, FaTwitter } from "react-icons/fa";
import { BsArrowUpRight, BsInstagram } from "react-icons/bs";
import image from "../assets/image.png";
import pen from "../assets/pen.png";
import play from "../assets/play.png";
import calender from "../assets/calender.png";

export default function Hero() {
  return (
    <div className="bg-[#245D51] text-white">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-10 h-[90vh]">
          <div className="flex flex-col">
            <h1 className="md:mt-20 xl:mt-20 mt-6 md:text-6xl text-3xl font-bold md:leading-[80px] leading-[45px] md:text-start text-center tracking-tight">
              There is <span className="relative underline-text">always</span>{" "}
              something new for us to learn
            </h1>
            <p className="my-10 md:leading-9 leading-7 md:text-start text-center md:w-5/6 md:text-lg w-full">
              we have created more than 100+ materials on various things that
              will help your career, with mentors who are experienced in their
              fields.
            </p>
            <div className="md:flex items-center gap-5 m-auto md:m-0">
              <button className="flex items-center justify-center gap-3 font-bold bg-[#CB8461] text-white py-2 px-6 rounded-md">
                Start Journey <BsArrowUpRight />
              </button>
              <div className="flex items-center gap-4 text-xl justify-center mt-6 md:mt-0">
                <BsInstagram />
                <FaTwitter />
                <FaDiscord />
              </div>
            </div>
          </div>
          <div className="flex justify-end ">
            <img
              className="h-full object-cover hidden md:block"
              src={image}
              alt=""
            />
            <div className="absolute md:hidden block">
              <img
                className="h-10 -mt-32 mr-72"
                src={calender}
                alt="calender icon"
              />
              <img
                className="h-10 ml-72 mt-20"
                src={play}
                alt="play icon"
              />
              <img
                className="h-10 -ml-4 -mt-[560px]"
                src={pen}
                alt="play icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}