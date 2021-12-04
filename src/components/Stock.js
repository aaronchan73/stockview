import React from 'react'

const Stock = ({ key, name, bought, current }) => {
    return (
        <div className="stock">
            <p>Stock: {name}</p>
            <p>Bought Price: {bought}</p>
            <p>Current Price: {current}</p>
        </div>
    );
}

export default Stock;
