const styles  = {
    boxWidth: "xl:max-w-[1280px] w-full  mx-auto",

    heading1: "font-changa font-normal w-full xl:text-[79px] lg:text-[70px] text-[44px] leading-[50px] tracking-[-1.32px] xl:tracking-[-2.37px]  lg:leading-[70px] xl:leading-[80px] md:w-[400px] lg:w-[490px] xl:w-[519px]  ",
    heading2: "font-changa font-normal w-full font-normal sm:text-[58px] md:text-[60px]  text-black lg:text-[72px] lg:leading-[74px] xl:tracking-[-2.16px] ",
    heading3: "font-changa font-normal w-full font-normal sm:text-[58px] text-black xl:tracking-[-2.16px] ",
    heading4: "font-pt font-bold leading-[32px] md:text-[20px] text-[16px] sm:text-[18px] ",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexBetween: "flex justify-between items-center",
    flexStartB: "flex justify-between items-start",
    flexEnd: "flex justify-end items-center",
    flexWrap: "flex flex-wrap justify-center",

    paddingX: "sm:px-14 px-5 xl:px-0",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-14 md:px-[60px] px-5 xs:px-6 xl:px-0  sm:py-12  py-4",
    padding2: "sm:px-16 px-7 xl:px-0 ",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
    image: "transition duration-150 ease-out hover:ease-in  hover:scale-[1.03] object-cover cursor-pointer"
}

 
export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    section1: `flex md:flex-row flex-col`,
    section2: `flex lg:flex-row flex-col`,
    sectionCol: `flex flex-col`,
    
    button: `bg-primary ${styles.flexCenter} gap-4 text-white font-poppins text-[16px] font-semibold xl:leading-[24px] `
}

export default styles;