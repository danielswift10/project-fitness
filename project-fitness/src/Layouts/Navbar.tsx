// import { useState } from "react"
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import styles from "@/style"
import { logo } from "@/Assets"
import { Links } from "@/Constants"

// type Props = {};

export const Navbar = () => {
  return ( 
    <nav>
        <div 
        className={`${styles.flexBetween} border bg-[red] fixed top-0 z-30 w-full py-6 `}
        >
            <div className={`${styles.flexBetween} mx-auto `}>
                <div className={`${styles.flexBetween} flex-row `}>
                    <img src={logo} alt="logo " className=""/>

                    <div className={`${styles.flexBetween} gap-8 text-sm w-full`}>
                        <div className="linksi">
                            {
                                Links.map((item, index) => (
                                    <ul key={index}>
                                        <li className="border">{item.title}</li>
                                    </ul>
                                ))
                            }
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
  )
}
