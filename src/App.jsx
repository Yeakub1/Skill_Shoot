import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partner from "./components/Partner";
import Services from "./components/Services";
import SubBanner from "./components/Sub-Banner";
import Subscribe from "./components/Subscribe";

export default function App() {
  return <div className="">
    <Navbar />
    <Hero />
    <Partner />
    <Banner />
    <Services />
    <About />
    <SubBanner />
    <Subscribe />
    <Contact/>
  </div>
}
