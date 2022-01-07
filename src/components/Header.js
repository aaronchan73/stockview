import React from 'react'

const Header = ({title}) => {

    return (
        <header>
            <h1 class="text-gray-50">{title}</h1>
            <img src="logo2green.png" alt="StockView" width="80" height="60" />
        </header>
    );
}

export default Header;
