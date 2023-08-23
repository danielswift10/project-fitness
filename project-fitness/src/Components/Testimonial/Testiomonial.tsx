import { benefitPageGraphic } from "@/Assets";
import Button from "@/Utils/Button";
import Text from "@/Utils/Text";
import styles from "@/styles";
import { motion } from "framer-motion";


const Testimonial = () => {
    return (
        <section
            className={`bg-white pb-10 `}
        >
            <div className={` ${styles.paddingX} ${styles.boxWidth} flex flex-col md:flex-row items-center justify-between gap-20 md:pt-28 pt-16`}>
                <div className="image ">
                    <img className="mx-auto w-full " src={benefitPageGraphic} alt="" />
                </div>

                <div className="text md:basis-3/5">
                    <div className="relative">
                        <div
                            className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves"
                        >
                           <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                              hidden: { opacity: 0, x: 50 },
                              visible: { opacity: 1, x: 0 },
                            }}
                           >
                           <Text>
                                MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                <span className="text-primary-500">FIT</span>
                            </Text>
                           </motion.div>
                           <motion.div
                           initial="hidden"
                           whileInView="visible"
                           viewport={{ once: true, amount: 0.5 }}
                           transition={{ delay: 0.2, duration: 0.5 }}
                           variants={{
                             hidden: { opacity: 0, x: 50 },
                             visible: { opacity: 1, x: 0 },
                           }}
                           >
                           <p className="my-5">
                                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                                Felis orci diam odio.
                            </p>
                            <p className="mb-5">
                                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                                enim mattis odio in risus nunc.
                            </p>
                           </motion.div>
                            <motion.div
                             initial="hidden"
                             whileInView="visible"
                             viewport={{ once: true, amount: 0.5 }}
                             transition={{ delay: 0.2, duration: 0.5 }}
                             variants={{
                               hidden: { opacity: 0, x: 50 },
                               visible: { opacity: 1, x: 0 },
                             }}
                            
                            className="relative my-8">
                                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">
                                    <Button
                                        type="button"
                                        className={`rounded-md font-semibold bg-secondary-500 px-6 py-3 hover:bg-primary-500 hover:text-white`}
                                        title="Join Now"
                                        onClick={() => console.log("button clicked")}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;