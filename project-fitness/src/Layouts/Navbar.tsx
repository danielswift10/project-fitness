import { logo } from "@/Assets";
import { Links } from "@/Constants";
import Button from "@/Utils/Button";
import styles from "@/styles";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";



type NavbarProps = {
    isTopOfPage: boolean,

}

const Navbar = ({ isTopOfPage }: NavbarProps) => {
    const [active, setActive] = useState<string>("Home");
    const [toggle, setToggle] = useState<boolean>(false);
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickLink = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setToggle(false);
            }
        };

        document.addEventListener("click", handleClickLink, true);
        return () => {
            document.removeEventListener("click", handleClickLink, true);
        };
    })
    return (
        <nav
            className={` ${navbarBackground} fixed top-0 mx-auto w-full z-30 `}
        >
            <div
                className={`${styles.boxWidth} w-4/5 md:w-[90%] mx-auto ${styles.flexBetween} py-5    `}
            >
                <div className="nav-logo ">
                    <img src={logo} alt=""
                        className=""
                    />
                </div>
                <div className="navbar-links-desk md:flex md:flex-row hidden md:justify-between  md:items-center">
                    <ul className="flex gap-12 md:gap-6 lg:gap-12">
                        {
                            Links.map((link, index) => (
                                <AnchorLink key={index}
                                    className={`
                                ${active === link.title ? "text-primary-500" : ""}
                                cursor-pointer  font-dmsans hover:text-primary-300 transition duration-500`}
                                    onClick={() => setActive(link.title)}
                                    href={`#${link.id}`}
                                >{link.title}</AnchorLink>
                            ))
                        }
                    </ul>
                </div>
                <div className={`${styles.flexCenter}  md:flex gap-[33px] hidden`}>
                    <Button
                        type="button"
                        className={`text-primary-500 hover:text-primary-300`}
                        title="Sign In"
                        onClick={() => console.log("button clicked")}
                    />
                    <Button
                        type="button"
                        className={`rounded-md font-semibold bg-secondary-500 px-8 py-4 ${styles.image} `}
                        title="Become a Member"
                        onClick={() => console.log("button clicked")}
                    />
                </div>
                <div className="navbar-links-mobile md:hidden flex gap-[33px]  justify-end items-center z-[100]" ref={ref}>
                    <div className={`${styles.flexCenter}  sm:flex gap-[33px] hidden`}>
                        <Button
                            type="button"
                            className={`text-primary-500 hover:text-primary-300`}
                            title="Sign In"
                            onClick={() => console.log("button clicked")}
                        />
                        <Button
                            type="button"
                            className={`rounded-md font-semibold bg-secondary-500 px-8 py-4 ${styles.image} `}
                            title="Become a Member"
                            onClick={() => console.log("button clicked")}
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
                        className={`${!toggle ? "hidden" : "flex"}  bg-primary-100 drop-shadow-xl py-[100px]  absolute top-[64px] ss:top-[85px] right-0  my-2 w-full min-h-screen z-100 navbar-links`}
                    >
                        <ul className="flex  items-center  flex-1 flex-col gap-16">
                            {
                                Links.map((link, index) => (
                                    <AnchorLink
                                        key={index}
                                        className={`
        ${active === link.title ? "text-primary-500" : ""}
        cursor-pointer font-dmsans hover:text-primary-300 text-[18px] transition duration-500`}
                                        onClick={() => {
                                            setActive(link.title);
                                            
                                            setToggle(false);
                                        }}
                                        href={`#${link.id}`}
                                    >
                                        {link.title}
                                    </AnchorLink>

                                ))
                            }
                            <Button
                                type="button"
                                className={`text-primary-500 sm:hidden text-[18px] hover:text-primary-300`}
                                title="Sign In"
                                onClick={() => console.log("button clicked")}
                            />
                            <Button
                                type="button"
                                className={`rounded-md font-semibold bg-secondary-500 sm:hidden px-8 py-4  ${styles.image} text-white`}
                                title="Become a Member"
                                onClick={() => console.log("button clicked")}
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;