import { BenefitArrayType } from "@/Types/types";
import Text from "@/Utils/Text";
import styles from "@/styles";
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import BenefitContainer from "./BenefitContainer";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

const BenefitsInfo: Array<BenefitArrayType> = [
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: "State of the Art Facilities",
      description:
        "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "100's of Diverse Classes",
      description:
        "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "Expert and Pro Trainers",
      description:
        "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
  ];

const Benefits = () => {
    return (
        <section id="benefits" className={` ${styles.paddingX} bg-white`}>
            <div className={` py-24 ${styles.boxWidth}`}>
                <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ duration: 0.5 }}
                 variants={{
                   hidden: { opacity: 0, x: -50 },
                   visible: { opacity: 1, x: 0 },
                 }}
                className="header">
                    <Text>
                        MORE THAN JUST GYM.
                    </Text>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and classes to
                        get you to your ultimate fitness goals with ease. We provide true
                        care into each and every member.
                    </p>
                </motion.div>
                <motion.div
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, amount: 0.5 }}
                   variants={container}
                className="benefit-info flex-wrap flex items-center gap-8 justify-center  ">
                    {
                        BenefitsInfo.map((benefit: BenefitArrayType) => (
                            <BenefitContainer
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            />
                        ))
                    }
                </motion.div>
            </div>
        </section>
    );
}

export default Benefits;