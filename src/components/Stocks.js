import React from 'react'
import Stock from "./Stock"

const Stocks = ({stocks}) => {

    return stocks.map((stock) => (<Stock name={stock.name} bought={stock.bought} />));

}

export default Stocks;
