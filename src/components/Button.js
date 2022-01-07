import React from 'react'

const Button = ({title, onClick}) => {
    return <button class="text-gray-50" onClick={onClick}>{title}</button>
}

export default Button;
