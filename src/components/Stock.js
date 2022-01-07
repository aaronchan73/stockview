import React from 'react'
import { useState, useEffect } from 'react'
import { FaAngleUp, FaAngleDown, FaTrashAlt, FaPlusCircle } from "react-icons/fa"
import LineGraph from './LineGraph'

const Stock = ({ stock, onDelete, addProfit }) => {

    const [open, setOpen] = useState(0);
    const [high, setHigh] = useState(0);
    const [low, setLow] = useState(0);
    const [close, setClose] = useState(0);
    const [volume, setVolume] = useState(0);
    const [details, setDetails] = useState(false);
    const [error, setError] = useState(false);
    const [pairs, setPairs] = useState([]);
    const [closePrev, setClosePrev] = useState(0);

    useEffect(() => {
        fetchAPI();
    }, []);

    const fetchAPI = () => {
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
                    let dateValues = [];
                    let pairedData = [];
                    let closedValues = [];
                    console.log(data);
                    for (var date in data["Time Series (Daily)"]) {
                        let closed = data["Time Series (Daily)"][date]["4. close"];
                        dateValues.push(date);
                        pairedData.push(
                            {
                                x: date.substring(8),
                                y: parseFloat(closed)
                            }
                        );
                        closedValues.push(closed);
                    }

                    let today = dateValues[0];
                    console.log(stock.name);
                    console.log(closedValues[0]);
                    console.log(closedValues[1]);

                    if (typeof today !== 'undefined') {
                        setPairs(pairedData);
                        setOpen(data["Time Series (Daily)"][today]["1. open"]);
                        setHigh(data["Time Series (Daily)"][today]["2. high"]);
                        setLow(data["Time Series (Daily)"][today]["3. low"]);
                        setClose(data["Time Series (Daily)"][today]["4. close"]);
                        setClosePrev(closedValues[1]);
                        setVolume(data["Time Series (Daily)"][today]["5. volume"]);
                    } else {
                        setError(true);
                    }

                }
            )
    }

    return (
        <div class="bg-gray-600 mb-5 mt-5 w-96 cursor-pointer p-5 rounded-xl" onClick={() => setDetails(!details)}>
            {!error ?
                <div>
                    <h4>Stock: {stock.name}</h4>
                    {!details ? <FaAngleDown /> : <FaAngleUp />}
                    <p>Shares: {stock.shares}</p>
                    <p>Bought Price: ${stock.bought}</p>
                    <p>Close Price: ${(close * 1).toFixed(2)}</p>
                    {!details && ((close - stock.bought) >= 0 ?
                        <div>
                            <p style={{ color: "#00ff4c" }}>Net Profit: ${((close - stock.bought) * stock.shares).toFixed(2)}</p>
                            <FaPlusCircle onClick={() => addProfit(((close - stock.bought) * stock.shares))} />
                        </div> :
                        <div>
                            <p style={{ color: "#ff2e2e" }}>Net Profit: ${((close - stock.bought) * stock.shares).toFixed(2)}</p>
                            <FaPlusCircle onClick={() => addProfit(((close - stock.bought) * stock.shares))} />
                        </div>)}
                    {details &&
                        <div>
                            <p>Open Price: ${(open * 1).toFixed(2)}</p>
                            <p>High Price: ${(high * 1).toFixed(2)}</p>
                            <p>Low Price: ${(low * 1).toFixed(2)}</p>
                            <p>Volume: {volume}</p>
                            {(close - stock.bought) >= 0 ?
                                <p style={{ color: "#00ff4c" }}>Net Profit: ${((close - stock.bought) * stock.shares).toFixed(2)}</p> :
                                <p style={{ color: "#ff2e2e" }}>Net Profit: ${((close - stock.bought) * stock.shares).toFixed(2)}</p>}
                            <FaPlusCircle onClick={() => addProfit(((close - stock.bought) * stock.shares))} />
                            <LineGraph data={pairs} profit={(close - closePrev) >= 0} /><br />
                            {(close - closePrev) >= 0 ?
                                <div>
                                    <p style={{ color: "#00ff4c" }}>+${(close - closePrev).toFixed(2)}</p>
                                    <p style={{ color: "#00ff4c" }}>+{(((close - closePrev) / closePrev) * 100).toFixed(2)}%</p>
                                </div> :
                                <div>
                                    <p style={{ color: "#ff2e2e" }}>-${(-1*(close - closePrev)).toFixed(2)}</p>
                                    <p style={{ color: "#ff2e2e" }}>{(((close - closePrev) / closePrev) * 100).toFixed(2)}%</p>
                                </div>}<br />
                            <FaTrashAlt onClick={() => onDelete(stock.id)} />
                        </div>}
                </div> :
                <h2>Please try again later.</h2>}
        </div>
    );
}

export default Stock;

