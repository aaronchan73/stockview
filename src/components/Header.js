import React from 'react'

const Header = ({title}) => {

    return (
        <header class="mb-4">
            <h1 class="text-2xl">{title}</h1>
            <img src="logo2green.png" alt="StockView" width="80" height="60" />
        </header>
    );
}

export default Header;
