import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import ServiceArea from "../components/ServiceArea";
import Contact from "../components/Contact";

const Layout = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <ServiceArea />
      <Contact />
    </>
  );
};

export default Layout;
