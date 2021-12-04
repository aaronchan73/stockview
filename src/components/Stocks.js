import React from 'react'
import Stock from "./Stock"

const Stocks = ({stocks}) => {
    return (
        <div>
            {stocks.map((stock) => (
                <Stock key={stocks.key} name={stocks.name} bought={stocks.bought} current={stocks.current} />
            ))}
        </div>
    );
}

export default Stocks;
