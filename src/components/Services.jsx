import icon from "../assets/icon.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="">
          <h1 className="md:text-4xl text-2xl text-center md:text-start font-semibold">
            Why do we <span className="text-[#CB8461]">exist?</span>
          </h1>
          <p className="md:text-lg leading-9 md:w-4/5 md:mt-10 mt-6 text-center md:text-start">
            Because we know that many people or companies have the same problem
            when it comes to how difficult it is to improve their skills
          </p>
          <div className="py-10 flex items-center gap-5 justify-center md:justify-start">
            <img className="" src={icon} alt="" />
            <div className="">
              <h1 className="text-lg font-semibold">Jerony Pulquosta</h1>
              <p>CEO Skill Shoot</p>
            </div>
          </div>
          <hr className="md:w-3/5 w-4/6 m-auto md:m-0 border-[2px]" />
          <div className="flex items-center gap-8 mt-10 justify-center md:justify-start">
            <div className="text-center">
              <h1 className="md:text-4xl text-2xl font-bold">100+</h1>
              <p className="mt-3">Updated Material</p>
            </div>
            <div className="text-center">
              <h1 className="md:text-4xl text-2xl font-bold">25k</h1>
              <p className="mt-3">Member Join</p>
            </div>
          </div>
        </div>
        <div className="md:mt-0 mt-10 text-center md:text-start">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="py-7 md:py-0">
              <img className="m-auto md:m-0" src={icon1} alt="" />
              <h1 className="py-4 text-xl font-semibold text-[#245D51]">
                Material Limitations
              </h1>
              <p className="leading-7 md:text-lg w-5/6 md:w-full m-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="">
              <img className="m-auto md:m-0" src={icon2} alt="" />
              <h1 className="py-4 text-xl font-semibold text-[#245D51]">
                Unprofessional Mentor
              </h1>
              <p className="leading-7 md:text-lg w-5/6 md:w-full m-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="py-7 md:py-0 md:mt-16">
              <img className="m-auto md:m-0" src={icon3} alt="" />
              <h1 className="py-4 text-xl font-semibold text-[#245D51]">
                Video Quality
              </h1>
              <p className="leading-7 md:text-lg w-5/6 md:w-full m-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="md:mt-16">
              <img className="m-auto md:m-0" src={icon4} alt="" />
              <h1 className="py-4 text-xl font-semibold text-[#245D51]">
                High Price
              </h1>
              <p className="leading-7 md:text-lg w-5/6 md:w-full m-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
