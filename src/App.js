import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Stocks from './components/Stocks'
import Footer from './components/Footer'
import TotalProfits from './components/TotalProfits'
import AddStock from './components/AddStock'

function App() {

  const [showAddStock, setAddStock] = useState(false);

  const [stocks, setStocks] = useState([{
    key: 0,
    name: "AAPL",
    bought: 155,
    current: 200
  },
  {
    key: 1,
    name: "TSLA",
    bought: 300,
    current: 340
  },
  {
    key: 2,
    name: "SBUX",
    bought: 111,
    current: 230
  },
  {
    key: 3,
    name: "NKE",
    bought: 130,
    current: 200
  },
  {
    key: 4,
    name: "PAL",
    bought: 100,
    current: 150
  }]);

  const removeStock = () => {
    // STUB
  }

  const calcProfits = () => {
    let profits = 0;

    stocks.forEach((stock) => {
      profits += (stock.current - stock.bought);
    });

    return profits;

  }

  return (<div className='App'>
      <Header title="StockView"/>
      <Button title="Add Stock" onClick={() => {
        setAddStock(!showAddStock)}} />
      <Button title="Delete Stock" onClick={removeStock} />
      <TotalProfits profits={calcProfits()} />
      {showAddStock && <AddStock id="add" stocks={stocks}/>}
      <Stocks stocks={stocks} />
      <Footer />
    </div>);
}

export default App;
