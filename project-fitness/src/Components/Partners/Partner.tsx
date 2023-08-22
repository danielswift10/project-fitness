import { sponsorForbes, sponsorFortune, sponsorRedBull } from "@/Assets";
import styles from "@/styles";

const Partners = () => {
    return ( 
        <section className={`mt-14 bg-primary-100`}>
            <div className={`w-full py-10 ${styles.boxWidth} ${styles.paddingX}`}>
            <div className="flex  ss:w-3/4 sm:w-3/5 flex-wrap md:flex-row items-center justify-between gap-8">
                <img src={sponsorRedBull} alt="" />
                <img src={sponsorForbes} alt="" />
                <img src={sponsorFortune} alt="" />
                </div>
            </div>
        </section>
     );
}
 
export default Partners;