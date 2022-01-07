import React from 'react'

const Button = ({title, onClick}) => {
    return <button class="bg-gray-600 p-2 rounded-lg text-gray-50" onClick={onClick}>{title}</button>
}

export default Button;
