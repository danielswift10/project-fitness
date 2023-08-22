import Button from "@/Utils/Button";

type BenefitProps ={
    icon: JSX.Element;
    title: string;
    description: string;
}


const BenefitContainer = ({icon, title, description}: BenefitProps) => {
    return ( 
        <div className="rounded-md border-2  border-gray-100 py-14 px-5 w-[320px] md:w-[330px] lg:w-[350px]  text-center mt-7">
            <div className="flex justify-center items-center flex-col gap-4">
            <div className="rounded-full border-2 border-gray-100  w-fit bg-primary-100 p-4">
                {icon}
            </div>
                <h4 className="font-bold">{title}</h4>
                <p className="">{description}</p>
                <Button
                        type="button"
                        className={`text-sm font-bold text-primary-500 underline hover:text-secondary-500`}
                        title={"Learn more"}
                        onClick={() => console.log("button clicked")}
                    />
            </div>
        </div>
     );
}
 
export default BenefitContainer;