import image from "../assets/man.png";
import Intersect from "../assets/Intersect.png";
import Intersect1 from "../assets/Intersect1.png";
import img1 from "../assets/img-1.png";
import img2 from "../assets/img-2.png";
import img3 from "../assets/img-3.png";
import img4 from "../assets/img-4.png";

export default function Banner() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:py-20 py-6">
      <div className="bg-[#F2E7DB] h-56 w-full rounded-md relative">
        <div className="grid md:grid-cols-2 justify-between">
          <div className="md:ml-10">
            <img
              className="h-10 absolute left-0 top-0"
              src={Intersect1}
              alt="Intersect"
            />
            <p className="md:text-3xl text-lg text-center md:text-start font-semibold mt-12">
              Happy <span className="text-[#CB8461]">Chinese New Year</span>,
              20% discount for you today
            </p>
            <div className="text-center md:text-start">
              <button className="px-4 py-2 bg-[#245D51] text-white font-semibold rounded-md mt-6">
                Subscribe Course
              </button>
            </div>
          </div>
          <div className="flex justify-evenly relative h-full">
            <div className="">
              <img
                className="ml-10 mt-14 h-9 absolute hidden md:block"
                src={img1}
                alt="images"
              />
              <img
                className="md:ml-14 md:mt-40 -ml-36 h-7 absolute"
                src={img2}
                alt="images"
              />
            </div>
            <img
              className="h-[325px] absolute -top-[100px] md:block hidden"
              src={image}
              alt="man image"
            />
            <img
              className="h-10 absolute right-0 md:-bottom-8 -bottom-14"
              src={Intersect}
              alt="Intersect"
            />
            <div className="hidden md:block">
              <img className="ml-28 mt-10 h-9" src={img3} alt="images" />
              <img className="ml-24 mt-20 h-9" src={img4} alt="images" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
