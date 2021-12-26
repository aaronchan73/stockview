import React from 'react'
import { useState } from 'react'

let values = [];

const Stock = ({name, bought}) => {

    let CODE = name;
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
            <h4>Stock: {name}</h4>
            <p>Bought Price: ${bought}</p>
            <p>Open Price: ${(open * 1).toFixed(2)}</p>
            <p>Net Profit: ${(open - bought).toFixed(2)}</p>
        </div>
    );
}

export default Stock;
