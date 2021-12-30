import React from 'react'
import { useState } from 'react'
import { TiDelete } from "react-icons/ti";

let values = [];

const Stock = ({ stock, onDelete }) => {

    let CODE = stock.name;
    let API_KEY = "5L4IWDVJ6FCUBAKL";
    let API_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${CODE}&apikey=${API_KEY}`;
    const [open, setOpen] = useState(0);

    fetch(API_URL)
        .then(
            (response) => {
                return response.json();
            }
        )
        .then(
            (data) => {

                for (var date in data["Time Series (Daily)"]) {
                    values.push(data["Time Series (Daily)"][date]["1. open"]);
                }

                setOpen(values[0]);
            }
        )

    return (
        <div className="stock">
            <h4>Stock: {stock.name} <TiDelete onClick={() => onDelete(stock.id)} /> </h4>
            <p>Bought Price: ${stock.bought}</p>
            <p>Open Price: ${(open * 1).toFixed(2)}</p>
            {(open - stock.bought) >= 0 ? 
            <p style={{color: "#00ff4c"}}>Net Profit: ${(open - stock.bought).toFixed(2)}</p> :
            <p style={{color: "#ff2e2e"}}>Net Profit: ${(open - stock.bought).toFixed(2)}</p>}
        </div>
    );
}

export default Stock;

