import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Stocks from './components/Stocks'
import Footer from './components/Footer'
import AddStock from './components/AddStock'
import TotalProfits from './components/TotalProfits'

function App() {

  const [showAddStock, setAddStock] = useState(false);

  const [stocks, setStocks] = useState([{
    id: 1,
    name: "AAPL",
    bought: 136.89,
    shares: 33
  },
  {
    id: 2,
    name: "TSLA",
    bought: 954.56,
    shares: 42
  },
  {
    id: 3,
    name: "SBUX",
    bought: 111.99,
    shares: 25
  },
  {
    id: 4,
    name: "NKE",
    bought: 167.21,
    shares: 95
  }
  ]);

  const [profits, setProfits] = useState(0);

  const deleteStock = (id) => {
    setStocks(stocks.filter((stock) => stock.id !== id));
  }

  const addStock = (stock) => {
    let name = stock.name;
    let bought = parseFloat(stock.bought);
    let share = parseFloat(stock.shares);
    let newStock = { 
      id: stocks.length + 1,
      name: name,
      bought: bought,
      shares: share
    }
    setStocks([...stocks, newStock]);
    console.log(stocks);
  }

  const addProfit = (amount) => {
    let profit = profits + amount;
    console.log(profit);
    setProfits(profit);
  }

  return (<div class="bg-gray-700">
    <Header title="StockView" />
    <Button title="Add Stock" onClick={() => { setAddStock(!showAddStock) }} /><br />
    {showAddStock && <AddStock onAdd={addStock} />}
    <TotalProfits profits={profits}/>
    {stocks.length > 0 ? <Stocks stocks={stocks} onDelete={deleteStock} addProfit={addProfit} /> :
      <div><br /><h2>Add a stock using the button above.</h2><br /></div>}
    <Footer />
  </div>);

}

export default App;
