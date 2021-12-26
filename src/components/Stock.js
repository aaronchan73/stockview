import React from 'react'

const Stock = ({name, bought, current, showDelete}) => {

    let open;
    // let high;
    // let low;

    const componentDidMount = () => {
        this.fetchStock();
    }

    const fetchStock = () => {

        let CODE = "AAPL";
        let API_KEY = "5L4IWDVJ6FCUBAKL";
        let API_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${CODE}&apikey=${API_KEY}`

        fetch(API_URL)
            .then(
                (response) => {
                    return response.json;
                }
            )
            .then(
                (data) => {
                    console.log(data);

                    open = data["Time Series (Daily)"]["2021-12-23"]["1. open"];
                    console.log(open);
                }
            )

    }

    return (
        <div className="stock">
            <h4>Stock: {name}</h4>
            <p>Bought Price: ${bought}</p>
            <p>Current Price: ${current}</p>
            <p>Net Profit: ${current - bought}</p>
        </div>
    );
}

export default Stock;
