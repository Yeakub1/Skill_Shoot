import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img4 from "../assets/img-4.png";
import Ellipse from "../assets/Ellipse.png";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [currentIndex];
    }
    const prev =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    const next =
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    return [prev, currentIndex, next];
  };

  if (testimonials.length === 0) {
    return <div>No testimonials available.</div>;
  }

  return (
    <div id="testimoni" className="bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 md:py-20 py-10 relative">
        <div className="absolute md:hidden block">
          <img className="h-7" src={img4} alt="" />
          <img className="h-5 ml-80 -mt-6" src={Ellipse} alt="" />
        </div>
        <div className="text-center md:mb-28 mb-16">
          <h1 className="md:text-4xl text-xl font-semibold">
            What do they <span className="text-[#CB8461]">say?</span>
          </h1>
          <p className="mt-4">
            This is an honest review from members who have joined us
          </p>
        </div>
        <div className="flex mb-6 overflow-hidden">
          {getVisibleTestimonials().map((index, i) => {
            const testimonial = testimonials[index];
            return (
              <div
                key={testimonial.id}
                className={`w-full md:w-1/3 p-6 flex flex-col items-center transition-all duration-300 ${
                  (!isMobile && i === 1) || isMobile
                    ? "bg-white scale-105  rounded-xl border-b-[12px] border-[#245D51]"
                    : "scale-95 border-transparent hover:bg-[#245D51] hover:text-white hover:rounded-xl"
                }`}
              >
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg font-semibold">{testimonial.name}</p>
                <p className="text-center text-gray-600 mb-4">
                  {testimonial.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center space-x-4 mt-10">
          <button
            onClick={handlePrev}
            className="bg-white rounded-full px-5 py-5 shadow-md hover:bg-[#CB8461] hover:text-white transition-colors"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="bg-[#CB8461] text-white  rounded-full px-5 py-5 shadow-md hover:bg-[#245D51] transition-colors"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
