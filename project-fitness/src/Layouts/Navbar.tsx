import { logo } from "@/Assets";
import { Links } from "@/Constants";
import Button from "@/Utils/Button";
import styles from "@/styles";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type NavbarProps = {
    isTopOfPage: boolean,

}

const Navbar = ({isTopOfPage} : NavbarProps) => {
    const [toggle, setToggle] = useState(false);
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
    return ( 
        <nav
        className={`${styles.paddingX} ${navbarBackground} fixed top-0 mx-auto w-full z-30 `}
        >
            <div 
            className={`${styles.boxWidth} ${styles.flexBetween} py-5    `}
            >
                <div className="nav-logo ">
                    <img src={logo} alt="" 
                    className=""
                    />
                </div>
                <div className="navbar-links-desk md:flex md:flex-row hidden md:justify-between  md:items-center">
                    <ul className="flex gap-12 md:gap-6 lg:gap-12">
                        {
                            Links.map((link, index) =>(
                                <li key={index}
                                className="cursor-pointer text-primary-500 font-dmsans hover:text-primary-300 transition duration-500"
                                >{link.title}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className={`${styles.flexCenter}  md:flex gap-[33px] hidden`}>
                    <Button
                    type="button"
                    className={`text-primary-500 hover:text-primary-300`}
                    title="Sign In"
                    onClick={()=> console.log("button clicked")}
                    />
                    <Button
                    type="button"
                    className={`rounded-md bg-secondary-500 px-8 py-4 hover:bg-primary-500 hover:text-white`}
                    title="Become a Member"
                    onClick={()=> console.log("button clicked")}
                    />
                </div>
                <div className="navbar-links-mobile md:hidden flex gap-[33px]  justify-end items-center z-[2]">
                <div className={`${styles.flexCenter}  sm:flex gap-[33px] hidden`}>
                    <Button
                    type="button"
                    className={`text-primary-500 hover:text-primary-300`}
                    title="Sign In"
                    onClick={()=> console.log("button clicked")}
                    />
                    <Button
                    type="button"
                    className={`rounded-md bg-secondary-500 px-8 py-4 hover:bg-primary-500 hover:text-white`}
                    title="Become a Member"
                    onClick={()=> console.log("button clicked")}
                    />
                </div>
                {
                        toggle ? (
                            <button 
                            className="rounded-full  bg-secondary-500 p-[6px]">
                                <XMarkIcon
                            className="h-6 w-6 text-white"
                            onClick={() => setToggle(false)}
                            />
                            </button>
                        ) :
                        (
                            <button  
                            onClick={() => setToggle(true)}
                            className="rounded-full bg-secondary-500 p-[6px]">
                                 <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        )
                    }
                  
                    <div
                    className={`${!toggle ? "hidden" : "flex"}  bg-primary-100 drop-shadow-xl py-[100px]  absolute top-[70px] right-0  my-2 w-full min-h-screen navbar-links`}
                    >
                    <ul className="flex  items-center  flex-1 flex-col gap-16">
                        {
                            Links.map((link, index) =>(
                                <li key={index}
                                className="text-primary-500 hover:text-primary-300 text-[18px] transition duration-500"
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>

                                </li>
                            ))
                        }
                        <Button
                    type="button"
                    className={`text-primary-500 sm:hidden hover:text-primary-300`}
                    title="Sign In"
                    onClick={()=> console.log("button clicked")}
                    />
                    <Button
                    type="button"
                    className={`rounded-md bg-secondary-500 sm:hidden px-8 py-4 hover:bg-primary-500 hover:text-white`}
                    title="Become a Member"
                    onClick={()=> console.log("button clicked")}
                    />
                    </ul>
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;