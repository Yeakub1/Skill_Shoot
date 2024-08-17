import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import img2 from "../assets/img-2.png";
import img3 from "../assets/img-3.png";

export default function CourseSlider() {
  const [courses, setCourses] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? courses.length - slidesToShow : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (courses.length - slidesToShow + 1)
    );
  };

  const getVideoId = (url) => {
    if (!url) return null;
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/
    );
    return match && match[1];
  };

  return (
    <div id="course" className="bg-[#245D51] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center md:mb-20 mb-10">
          <h1 className="md:text-4xl text-xl font-semibold ">
            Popular courses of the week
          </h1>
          <p className="md:w-3/12 md:text-base text-sm w-full m-auto mt-5 leading-9">
            List of the most popular lists that are often studied by our members
          </p>
        </div>
        <div className="absolute">
          <img
            className="md:-mt-40 md:ml-24 -mt-52 h-7 md:h-10"
            src={img3}
            alt="images"
          />
          <img
            className="md:-mt-16 md:ml-[1100px] h-4 md:h-7 ml-80 -mt-1"
            src={img2}
            alt="images"
          />
        </div>
        <div className="relative overflow-hidden px-10">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            }}
          >
            {courses.map((course) => {
              const videoId = getVideoId(course.video);
              return (
                <div
                  key={course.id}
                  className={`w-full md:w-1/3 flex-shrink-0 p-4`}
                >
                  <div className="bg-white rounded-2xl shadow-md h-full flex flex-col justify-between">
                    <div>
                      <div className="mb-4">
                        {videoId ? (
                          <div className="relative rounded-t-2xl overflow-hidden">
                            <iframe
                              className="w-full h-[200px]"
                              src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&showinfo=0&controls=0`}
                              title={course.name}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                        ) : (
                          <div className="w-full h-48 bg-gray-200 rounded-t-2xl flex items-center justify-center">
                            <span className="text-gray-500">
                              No video available
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="md:p-5 p-2 -mt-5 ">
                        <h3 className="text-xl font-bold mb-2 text-gray-800">
                          {course.name}
                        </h3>
                        <div className="flex items-center justify-between my-5 gap-2">
                          <div className="flex items-center gap-3">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={course.photo}
                              alt="photo"
                            />
                            <div className="">
                              <p className="font-semibold text-black md:text-sm text-xs">
                                {course.instructor}
                              </p>
                              <p className="text-gray-600 text-xs">
                                {course.position}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <LuUser2 className="text-[#245D51] text-3xl " />
                            <div className="">
                              <p className="text-sm text-gray-500">
                                {course.enrolledUsers}
                              </p>
                              <p className="text-xs text-gray-500">
                                Participant
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-7">
                          <button className="bg-[#245D51] text-xs font-semibold text-white px-6 py-3 rounded hover:bg-[#CB8461] ">
                            Buy Now
                          </button>

                          <div className="flex items-end text-black">
                            <h1 className="md:text-2xl text-xl font-bold">
                              ${course.price}
                            </h1>
                            <p className="text-xs text-[#808080]">
                              /{course.videos} video
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 md:left-7 left-4 transform -translate-y-1/2 bg-white text-black rounded-full md:px-5 md:py-5 px-2 py-2 shadow-md hover:bg-[#245D51] transition-colors"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 md:right-8 right-4 transform -translate-y-1/2 hover:bg-[#CB8461] text-white rounded-full md:px-5 md:py-5 px-2 py-2 shadow-md bg-[#245D51] transition-colors border-white border-[5px]"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
