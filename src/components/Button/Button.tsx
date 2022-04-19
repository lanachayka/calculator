import React from 'react'
import './Button.css'

type ButtonProps = {
  className: string,
  value: string | number,
  onClick: (e) => void
}

const Button: React.FC<ButtonProps> = ({ className, value, onClick }) => {
    return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
    )
}

export default Button;
