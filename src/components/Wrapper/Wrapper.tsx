import React from 'react'
import "./Wrapper.css";

type WrapperProps = {
    children: React.ReactNode 
}

const Wrapper: React.FC<WrapperProps> = ({children}) => {
    return <div className="wrapper">{children}</div>;
}

export default Wrapper;
