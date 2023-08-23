import { homePageGraphic, homePageText } from "@/Assets";
import Button from "@/Utils/Button";
import styles, { layout } from "@/styles";
import { motion } from "framer-motion";


const Hero = () => {
    return (
        <section id="home"
            className={`${styles.boxWidth} ${styles.paddingX}  pt-32 ss:mt-38 md:mt-0 ${layout.section1} items-center justify-center    `}>
            <div className="text md:basis-3/5 z-10 ">
                <motion.div
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ duration: 0.5 }}
                 variants={{
                   hidden: { opacity: 0, x: -50 },
                   visible: { opacity: 1, x: 0 },
                 }}
                >
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[-2] md:before:content-evolvetext">
                        <img src={homePageText} alt="" />
                    </div>
                </div>
                <p className="mt-6 text-sm font-dmsans ss:w-5/6 md:text-base lg:w-3/4">
                    Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                    Studios to get the Body Shapes That you Dream of.. Get Your Dream
                    Body Now.
                </p>
                </motion.div>
                <motion.div
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ delay: 0.2, duration: 0.5 }}
                 variants={{
                   hidden: { opacity: 0, x: -50 },
                   visible: { opacity: 1, x: 0 },
                 }}
                className={` flex gap-[33px] mt-8`}>
                    <Button
                        type="button"
                        className={`rounded-md bg-secondary-500 px-6 py-3 font-semibold font-dmsans ${styles.image}`}
                        title="Join Now"
                        onClick={() => console.log("button clicked")}
                    />
                    <Button
                        type="button"
                        className={`text- font-bold text-primary-500 underline hover:no-underline`}
                        title="Learn more"
                        onClick={() => console.log("button clicked")}
                    />
                </motion.div>
            </div>
            
            <div className="image md:z-10 ">
            
            <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ delay: 0.2, duration: 0.5 }}
             variants={{
               hidden: { opacity: 0, x: -50 },
               visible: { opacity: 1, x: 0 },
             }}
            >
                <img src={homePageGraphic} alt="" />
                </motion.div>
            </div>
            
        </section>
    );
}

export default Hero;