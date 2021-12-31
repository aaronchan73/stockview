import React from 'react'
import { useState, useEffect } from 'react'
import { FaAngleUp, FaAngleDown, FaTrashAlt } from "react-icons/fa"

const Stock = ({ stock, onDelete }) => {

    const [open, setOpen] = useState(0);
    const [details, setDetails] = useState(false);

    useEffect(() => {
        let API_KEY = "5L4IWDVJ6FCUBAKL";
        let API_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock.name}&apikey=${API_KEY}`;
        fetch(API_URL)
            .then(
                (response) => {
                    return response.json();
                }
            )
            .then(
                (data) => {
                    let values = [];
                    for (var date in data["Time Series (Daily)"]) {
                        values.push(data["Time Series (Daily)"][date]["1. open"]);
                    }

                    console.log(values);
                    setOpen(values[0]);
                }
            )

    }, []);

    return (
        <div className="stock" onClick={() => setDetails(!details)}>
            <h4>Stock: {stock.name}</h4>
            {!details ? <FaAngleDown /> : <FaAngleUp />}
            <p>Bought Price: ${stock.bought}</p>
            <p>Open Price: ${(open * 1).toFixed(2)}</p>
            {(open - stock.bought) >= 0 ?
                <p style={{ color: "#00ff4c" }}>Net Profit: ${(open - stock.bought).toFixed(2)}</p> :
                <p style={{ color: "#ff2e2e" }}>Net Profit: ${(open - stock.bought).toFixed(2)}</p>}
            {details &&
                <div>
                    <FaTrashAlt onClick={() => onDelete(stock.id)} />
                </div>}
        </div>
    );
}

export default Stock;

