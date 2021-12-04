import React from 'react'

const Button = ({title, onClick}) => {
    return <button className="btn" onClick={onClick}>{title}</button>
}

export default Button;
