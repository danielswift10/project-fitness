type ButtonProps = {
    type: "button" | "submit" | "reset";
    onClick: () => void
    className: string,
    title: string,
}

const Button = ({type, title,  onClick, className, }: ButtonProps) => {
    return ( 
        <button 
        className={className}
        onClick={onClick}
        type={type}
        >
            {title}
        </button>
     );
}
 
export default Button;