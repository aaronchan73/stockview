import React from 'react'
import Stock from "./Stock"

const Stocks = ({stocks}) => {
    return stocks.map((stock) => (
                <Stock key={stock.key} name={stock.name} bought={stock.bought} current={stock.current} />
                ));
}

export default Stocks;
