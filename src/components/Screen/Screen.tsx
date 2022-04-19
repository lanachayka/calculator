import React from 'react'
import { Textfit } from 'react-textfit';
import './Screen.css'

type ScreenProps = {
  value:  string | number
}

const Screen: React.FC<ScreenProps> = ({value}) => {
    return (
      <Textfit className="screen" mode="single" max={70}>
        {value}
      </Textfit>
    );
}

export default Screen;
