import React from 'react'

const Header = ({title}) => {

    return (
        <header>
            <h1>{title}</h1>
            <img src="logo2.png" alt="StockView" width="80" height="60" />
        </header>
    );
}

export default Header;
