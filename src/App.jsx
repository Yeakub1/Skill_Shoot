import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import CourseSlider from "./components/Courses";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partner from "./components/Partner";
import Services from "./components/Services";
import SubBanner from "./components/Sub-Banner";
import Subscribe from "./components/Subscribe";
import TestimonialCarousel from "./components/Testimoni";

export default function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Partner />
      <Banner />
      <Services />
      <About />
      <CourseSlider />
      <SubBanner />
      <Subscribe />
      <TestimonialCarousel />
      <Contact />
    </div>
  );
}
