import React from 'react'
import Stock from "./Stock"

const Stocks = ({stocks, showDelete}) => {
    
    // const getColor = () => {
    //     if ((stock.current - stock.bought) < 0) {
    //         return "red";
    //     } else {
    //         return "green";
    //     }
    // }

    return stocks.map((stock) => (<Stock name={stock.name} bought={stock.bought} current={stock.current} showDelete={showDelete}/>));
}

export default Stocks;
