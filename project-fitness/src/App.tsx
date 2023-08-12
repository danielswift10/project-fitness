import { useState } from "react";
import { Navbar } from "@/Layouts";
import { SelectedPage } from "@/Types/types";



const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  return (  
    <div className="">
      <Navbar
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
    </div>
  );
}
 
export default App;