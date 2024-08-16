import image1 from "../assets/Intersect1.png";
import img3 from "../assets/img-3.png";

export default function SubBanner() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:py-0 py-10 mt-20">
      <div className="bg-[#F2E7DB] md:h-44 h-80 w-full rounded-md relative flex items-center justify-center">
        <div className="grid md:grid-cols-2 gap-8 w-full">
          <div className="flex items-center justify-center">
            <img
              className="h-10 absolute left-0 top-0"
              src={image1}
              alt="Intersect"
            />
            <h1 className="md:text-3xl text-xl text-center md:text-start font-semibold md:leading-10 md:ml-12 w-5/6">
              <span className="text-[#CB8461]">Improve</span> your skills, and
              reach your career as soon as possible
            </h1>
          </div>
          <div className="md:flex items-center justify-center gap-6 text-center">
            <img
              className="md:-ml-[600px] md:mt-44 absolute ml-[325px] mt-9 md:h-10 h-7"
              src={img3}
              alt="images"
            />
            <button className="md:w-auto px-10 py-3 text-white bg-[#CB8461] rounded-md">
              Join Now
            </button>
            <button className="md:w-auto px-10 py-3 text-white bg-[#245D51] rounded-md mt-5 md:mt-0">
              Subscribe Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
