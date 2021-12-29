import React from 'react'
import Stock from "./Stock"

const Stocks = ({stocks, onDelete}) => {

    return stocks.map((stock) => <Stock stock={stock} onDelete={onDelete}/>);

}

export default Stocks;
