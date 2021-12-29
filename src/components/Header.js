import React from 'react'

const Header = ({title}) => {

    return (
        <header>
            <h1 style={{color: "#E0E0E0"}}>{title}</h1>
            <img src="logo2.png" alt="StockView" width="80" height="60" />
        </header>
    );
}

export default Header;
