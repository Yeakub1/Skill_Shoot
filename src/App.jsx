import About from "./components/About";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partner from "./components/Partner";
import Services from "./components/Services";

export default function App() {
  return <div className="">
    <Navbar />
    <Hero />
    <Partner />
    <Banner />
    <Services />
    <About/>
  </div>
}
