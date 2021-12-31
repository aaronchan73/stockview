import React from 'react'
import { useState, useEffect } from 'react'
import { FaAngleUp, FaAngleDown, FaTrashAlt } from "react-icons/fa"

const Stock = ({ stock, onDelete }) => {

    const [open, setOpen] = useState(0);
    const [high, setHigh] = useState(0);
    const [low, setLow] = useState(0);
    const [close, setClose] = useState(0);
    const [volume, setVolume] = useState(0);
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
                    let openValues = [];
                    let highValues = [];
                    let lowValues = [];
                    let closeValues = [];
                    let volumeValues = [];

                    console.log(data);
                    for (var date in data["Time Series (Daily)"]) {
                        openValues.push(data["Time Series (Daily)"][date]["1. open"]);
                        highValues.push(data["Time Series (Daily)"][date]["2. high"]);
                        lowValues.push(data["Time Series (Daily)"][date]["3. low"]);
                        closeValues.push(data["Time Series (Daily)"][date]["4. close"]);
                        volumeValues.push(data["Time Series (Daily)"][date]["5. volume"]);
                    }

                    console.log(openValues);
                    console.log(highValues);
                    console.log(lowValues);
                    console.log(closeValues);
                    console.log(volumeValues);

                    setOpen(openValues[0]);
                    setHigh(highValues[0]);
                    setLow(lowValues[0]);
                    setClose(closeValues[0]);
                    setVolume(volumeValues[0]);

                }
            )

    }, []);

    return (
        <div className="stock" onClick={() => setDetails(!details)}>
            <h4>Stock: {stock.name}</h4>
            {!details ? <FaAngleDown /> : <FaAngleUp />}
            <p>Bought Price: ${stock.bought}</p>
            <p>Close Price: ${(close * 1).toFixed(2)}</p>
            {(close - stock.bought) >= 0 ?
                <p style={{ color: "#00ff4c" }}>Net Profit: ${(close - stock.bought).toFixed(2)}</p> :
                <p style={{ color: "#ff2e2e" }}>Net Profit: ${(close - stock.bought).toFixed(2)}</p>}
            {details &&
                <div>
                    <p>Open Price: ${(open * 1).toFixed(2)}</p>
                    <p>High Price: ${(high * 1).toFixed(2)}</p>
                    <p>Low Price: ${(low * 1).toFixed(2)}</p>
                    <p>Volume: {volume}</p>
                    <FaTrashAlt onClick={() => onDelete(stock.id)} />
                </div>}
        </div>
    );
}

export default Stock;

