import vector from "../assets/Vector.png";
import circel from "../assets/circel.png";

export default function Contact() {
  return (
    <div className="bg-[#245D51] text-white">
      <div className="max-w-7xl mx-auto px-4 relative">
        <img
          className="absolute top-52 md:ml-36 mt-72 md:mt-0"
          src={vector}
          alt="vector"
        />
        <div className="text-center py-20">
          <h1 className="md:text-3xl text-xl w-5/6 m-auto">
            Subscribe to get notified about update
          </h1>
          <p className="text-[#808080] mt-3">
            By subscribing with your mail, you will accept our privacy policy
          </p>
          <div className="md:mt-7 mt-12 md:flex items-center justify-center gap-4">
            <input
              className="py-2 md:w-3/12 bg-[#396D62] rounded-sm ps-7"
              type="email"
              name=""
              placeholder="Enter your email"
              id=""
            />
            <button className="mt-5 md:mt-0 bg-[#CC8663] text-white font-semibold rounded-sm px-6 py-2">
              Subscribe us
            </button>
          </div>
        </div>
        <img
          className="md:ml-[1000px] top-40 absolute ml-64 mt-40 md:mt-0"
          src={circel}
          alt="circel"
        />
        <div className="flex flex-col-reverse items-center md:flex-row md:justify-between py-7 -mt-10 md:-mt-0">
          <a
            href="/"
            className="text-2xl font-bold order-first md:order-last mt-14 md:mt-0"
          >
            Skill <span className="text-[#CB8461]">Shoot</span>
          </a>
          <div className="flex flex-col items-center gap-6 order-first md:order-last md:flex-row text-[#808080] ">
            <a href="#home" className="hover:text-white hover:font-semibold">
              Home
            </a>
            <a href="#course" className="hover:text-white hover:font-semibold">
              Course
            </a>
            <a
              href="#subscribe"
              className="hover:text-white hover:font-semibold"
            >
              Subscribe
            </a>
            <a href="#about" className="hover:text-white hover:font-semibold">
              About
            </a>
            <a
              href="#testimoni"
              className="hover:text-white hover:font-semibold"
            >
              Testimoni
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
