import Text from "@/Utils/Text";
import ClassContainer from "./ClassContainer";
import { ClassType } from "@/Types/types";
import { image1, image2, image3, image4, image5, image6 } from "@/Assets";
import styles from "@/styles";

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image1,
    },
    {
        name: "Yoga Classes",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image3,
    },
    {
        name: "Adventure Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image4,
    },
    {
        name: "Fitness Classes",
        image: image5,
    },
    {
        name: "Training Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image6,
    },
];


const OurClasses = () => {
    return (
        <section className="bg-primary-100 py-40" id="our-classes">
           <div className={`${styles.boxWidth} ${styles.paddingX}`}>
           <div className="md:w-3/5">
                <Text>
                    OUR CLASSES
                </Text>
                <p className="py-5">
                    Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                    tellus quam porttitor. Mauris velit euismod elementum arcu neque
                    facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                    enim mattis odio in risus nunc.
                </p>
            </div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
            <ul className="w-[2800px] whitespace-nowrap">
                    {
                        classes.map((item: ClassType, index)=> (
                            <ClassContainer
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                            />
                        ))
                    }
                </ul>
            </div>
           </div>
        </section>
    );
}

export default OurClasses;