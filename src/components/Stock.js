import React from 'react'

const Stock = ({name, bought, current, showDelete}) => {
    
    return (
        <div className="stock">
            <h4>Stock: {name}</h4>
            <p>Bought Price: ${bought}</p>
            <p>Current Price: ${current}</p>
            <p>Net Profit: ${current - bought}</p>
        </div>
    );
}

export default Stock;
