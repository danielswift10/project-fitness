import { logo } from "@/Assets";
import styles from "@/styles";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="bg-primary-100 ">
            <div
                className={`${styles.boxWidth} pt-16  ${styles.paddingX} justify-content mx-auto flex flex-col md:gap-16 md:flex-row`}
            >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                className="mt-16 basis-1/2 md:mt-0">
                    <img alt="logo" src={logo} />
                    <p className="my-5">
                        Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
                        purus et arcu massa dictum condimentum. Augue scelerisque iaculis
                        orci ut habitant laoreet. Iaculis tristique.
                    </p>
                    <p>© Evogym All Rights Reserved.</p>
                </motion.div>
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Massa orci senectus</p>
                    <p className="my-5">Et gravida id et etiam</p>
                    <p>Ullamcorper vivamus</p>
                </motion.div>
                <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ duration: 1.5 }}
                 variants={{
                   hidden: { opacity: 0, x: -50 },
                   visible: { opacity: 1, x: 0 },
                 }}
                className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
                    <p>(333)425-6825</p>
                </motion.div>
            </div>
            <div className="flex items-center justify-center">
                <p className="py-5 text-[17px]">Built by:
                    <span >
                        <a href={'https://linkedin.com/in/daniel-ojeyomi'} target="_blank" className="font-bold"> {""}
                            Daniel Swift</a>
                    </span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;