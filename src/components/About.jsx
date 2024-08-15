import { LuUser2, LuUserCheck2 } from "react-icons/lu";
import image from "../assets/about-Image.png";
import { BiVideoRecording } from "react-icons/bi";
import { GoPlay } from "react-icons/go";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:py-20 py-10">
      <div className="grid md:grid-cols-2 justify-between">
        <div className="hidden md:block">
          <img src={image} alt="imges" />
        </div>
        <div className="">
          <h1 className="md:mt-20 xl:mt-20 mt-6 md:text-6xl text-3xl font-bold">
            Let us{" "}
            <span className="relative underline-text text-[#245D51]">
              Skill Shoot
            </span>
          </h1>
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
