import { useEffect, useState } from "react";
import { Footer, Navbar } from "./Layouts";
import { Benefits, ContactUs, Hero, OurClasses, Partners, Testimonial } from "./Components";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar isTopOfPage={isTopOfPage} />
      <Hero />
      <Partners />
      <Benefits />
      <Testimonial />
      <OurClasses />
      <ContactUs />
      <Footer />
      <ScrollToTop/>
    </div>
  );
}

export default App;