import { useState } from "react";
import { Navbar } from "@/Layouts";
import { SelectedPage } from "@/Types/types";
import Bar from "./Layouts/Bar";



const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  return (  
    <div className="app bg-gray-20">
      {/* <Navbar
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      /> */}
      <Bar/>
    </div>
  );
}
 
export default App;