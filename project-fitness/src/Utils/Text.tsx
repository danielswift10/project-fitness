import React from "react";

type TextProps = {
    children: React.ReactNode
}


const Text = ({children}: TextProps) => {
    return ( 
        <h1
        className="basis-3/5 font-montserrat text-3xl font-bold"
        >{children}</h1>
     );
}
 
export default Text;