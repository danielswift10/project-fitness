import { logo } from "@/Assets";
import { Links } from "@/Constants";
import styles from "@/styles";

const Navbar = () => {
    return ( 
        <nav
        className={`${styles.paddingX}`}
        >
            <div 
            className={`${styles.boxWidth} py-8 `}
            >
                <div className="nav-logo">
                    <img src={logo} alt="" 
                    className=""
                    />
                </div>
                <div className="navbar-links-desk">
                    <ul className="flex gap-12 md:gap-10">
                        {
                            Links.map((link, index) =>(
                                <li key={index}
                                >{link.title}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="cta">
                    
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;