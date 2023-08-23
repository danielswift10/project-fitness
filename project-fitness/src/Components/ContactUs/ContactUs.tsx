import { contactUsGraphic } from "@/Assets";
import Button from "@/Utils/Button";
import Text from "@/Utils/Text";
import styles from "@/styles";
import { motion } from "framer-motion";

const ContactUs = () => {
    return (
        <section id="contact-us" className={`bg-white`} >
            <div className={`${styles.boxWidth} ${styles.paddingX} mx-auto pt-24 pb-32`}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    className="contact-text md:w-3/5">
                    <Text>
                        <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                    </Text>
                    <p className="my-5">
                        Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                        sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                        adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                    </p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}

                    className="form-image  mt-10 justify-between gap-8 flex flex-col md:flex-row"
                >
                    <form>
                        <input type="text" className="
                        mb-5 w-full rounded-lg bg-primary-300
                        px-5 py-3 outline-white placeholder-white"
                            placeholder="Name"
                            required
                        />
                        <input type="email" className="
                        mb-5 w-full rounded-lg bg-primary-300
                        px-5 py-3 outline-white placeholder-white"
                            placeholder="Email"
                            required
                        />
                        <textarea
                            className="
                        mb-5 w-full rounded-lg bg-primary-300
                        px-5 py-3 outline-white placeholder-white"
                            placeholder="Message"
                            cols={50} rows={4}
                            required
                        />
                        <Button
                            type="submit"
                            className="mt-1 font-semibold rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                            title="Submit"
                            onClick={() => console.log("button clicked")}
                        />
                    </form>
                   <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}>
                   <div className="relative">
                        <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
                            <img src={contactUsGraphic} className="w-fit mx-auto" alt="" />
                        </div>
                    </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default ContactUs;