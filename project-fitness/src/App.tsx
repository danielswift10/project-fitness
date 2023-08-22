import { Navbar } from "./Layouts";




const App = () => {
  // const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  return (  
    <div className="app bg-gray-20">
      {/* <Navbar
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      /> */}
      <Navbar/>
    </div>
  );
}
 
export default App;