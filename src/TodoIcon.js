// Personalizacion de iconos SVG a la hora de integradicion de los proyectos 
// En este ejemplo se integraron formas de botones con personalizacion del los icones

import React from 'react'
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.css'

const iconTypes = {
    "check": (color) => <CheckSVG className='Icon-svg' fill={color} />,
    "delete": (color) => <DeleteSVG className='Icon-svg' fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span
        className={`Icon-container Icon-container-svg Icon-container-${type}`}
        onClick={onClick}
    >
        {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };