import { useEffect, useState } from "react";
import { Navbar } from "./Layouts";
import { Hero } from "./Components";

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
      <Navbar isTopOfPage={isTopOfPage}/>
      <Hero/>
    </div>
  );
}
 
export default App;