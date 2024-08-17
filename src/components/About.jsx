import { LuUser2, LuUserCheck2 } from "react-icons/lu";
import image from "../assets/about-Image.png";
import { BiVideoRecording } from "react-icons/bi";
import { GoPlay } from "react-icons/go";
import vectorline from "../assets/vector-line.png";

export default function About() {
  return (
    <div id="about" className="max-w-7xl mx-auto px-4 md:py-20 py-10">
      <div className="grid md:grid-cols-2 justify-between">
        <div className="hidden md:block">
          <img src={image} alt="imges" />
        </div>
        <div className="">
          <h1 className="md:mt-20 xl:mt-20 mt-6 md:text-5xl text-2xl font-bold">
            Let us <span className="text-[#245D51]">Skill Shoot</span>
          </h1>
          <img
            className="absolute md:ml-40 md:w-64 w-32 ml-20"
            src={vectorline}
            alt="vector image"
            draggable="false"
          />
          <p className="leading-8 mt-10 md:w-5/6 w-full">
            We are a company engaged in education with the aim of improving the
            skills of many people and so that younger people can reach the
            career paths they want.
          </p>
          <p className="leading-8 md:w-5/6 w-full mt-5 md:mt-7">
            we have been around since 2019 with currently 100+ updated materials
            and 15K members who have joined.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-7">
            <div className="flex items-center md:gap-5 gap-2">
              <LuUser2 className="bg-[#F2E7DB] md:text-4xl text-2xl p-1 md:p-2 text-[#CB8461] font-semibold rounded-full" />
              <p className="font-semibold text-xs md:text-lg">
                15K People Join
              </p>
            </div>
            <div className="flex items-center md:gap-5 gap-2">
              <LuUserCheck2 className="bg-[#F2E7DB] md:text-4xl text-2xl p-1 md:p-2 text-[#CB8461] font-semibold rounded-full" />
              <p className="font-semibold text-xs md:text-lg">Trusted Mentor</p>
            </div>
            <div className="flex items-center md:gap-5 gap-2">
              <BiVideoRecording className="bg-[#F2E7DB] md:text-4xl text-2xl p-1 md:p-2 text-[#CB8461] font-semibold rounded-full" />
              <p className="font-semibold text-xs md:text-lg">
                30+ Free Videos
              </p>
            </div>
            <div className="flex items-center md:gap-5 gap-2">
              <GoPlay className="bg-[#F2E7DB] md:text-4xl text-2xl p-1 md:p-2 text-[#CB8461] font-semibold rounded-full" />
              <p className="font-semibold text-xs md:text-lg">
                100+ Premium Videos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
