import React from 'react'
import'./ButtonBox.css'

type ButtonBoxProps = {
    children: React.ReactNode
}

const ButtonBox: React.FC<ButtonBoxProps> = ({children}) => {
    return <div className="buttonBox">{children}</div>;
}

export default ButtonBox;
