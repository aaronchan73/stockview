import React from 'react'
import Stock from "./Stock"

const Stocks = ({stocks, onDelete, addProfit}) => {

    return stocks.map((stock) => <Stock stock={stock} onDelete={onDelete} addProfit={addProfit}/>);

}

export default Stocks;
