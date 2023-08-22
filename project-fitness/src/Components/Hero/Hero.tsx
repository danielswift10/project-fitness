import { homePageGraphic, homePageText } from "@/Assets";
import Button from "@/Utils/Button";
import styles, { layout } from "@/styles";

const Hero = () => {
    return (
        <section id="home"
            className={`${styles.boxWidth} ${styles.paddingX} ${layout.section1} items-center justify-center   mt-32  `}>
            <div className="text md:basis-3/5">
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                        <img src={homePageText} alt="" />
                    </div>
                </div>
                <p className="mt-6 text-sm font-dmsans ss:w-5/6 md:text-base lg:w-3/4">
                    Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                    Studios to get the Body Shapes That you Dream of.. Get Your Dream
                    Body Now.
                </p>
                <div className={` flex gap-[33px] mt-8`}>
                    <Button
                        type="button"
                        className={`rounded-md bg-secondary-500 px-6 py-3 hover:bg-primary-500 hover:text-white`}
                        title="Join Now"
                        onClick={() => console.log("button clicked")}
                    />
                    <Button
                        type="button"
                        className={`text-sm font-bold text-primary-500 underline hover:text-secondary-500`}
                        title="Learn more"
                        onClick={() => console.log("button clicked")}
                    />
                </div>
            </div>


            <div className="image">
                <img src={homePageGraphic} alt="" />
            </div>
        </section>
    );
}

export default Hero;