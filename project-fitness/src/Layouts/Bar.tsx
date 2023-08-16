import { logo } from "@/Assets";
import Link from "@/Components/Navbar/Links";
import styles from "@/style";
type Props{
    page: string;
    selectedPage: string;
    setSelectedPage: (value: string) => void;
}


const Bar = ({page, selectedPage, setSelectedPage}: Props) => {
    return (
      <nav>
        <div 
        className={`${styles.flexBetween} border fixed top-0 z-30 w-full py-6 `}
        >
            <div className={`${styles.flexBetween} border w-full mx-auto `}>
                <div className={`${styles.flexBetween} flex-row `}>
                    <img src={logo} alt="logo " className=""/>

                    <div className={`${styles.flexBetween} gap-8 text-sm w-full`}>
                        <div className="links flex flex-row">
                            {/* {
                                Links.map((item, index) => (
                                   <Link
                                   key={index}
                                   page={item.title}
                                   selectedPage={selectedPage}
                                   setSelectedPage={setSelectedPage}

                                   />
                                ))
                            } */}
                            <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                        </div>
                        <div className={`${styles.flexBetween} gap-8`}>
                            <button>Sign In</button>
                            <button>Become a member</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      </nav>
      );
}
 
export default Bar;