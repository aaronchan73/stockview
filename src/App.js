import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Stocks from './components/Stocks'
import Footer from './components/Footer'

function App() {

  const [stocks, setStocks] = useState([{
    key: 1,
    name: "AAPL",
    bought: 155,
    current: 200
  },
  {
    key: 2,
    name: "TSLA",
    bought: 300,
    current: 340
  },
  {
    key: 3,
    name: "SBUX",
    bought: 111,
    current: 230
  }]);

  const addStock = () => {
    setStocks(stocks);
  }

  const removeStock = () => {
    //STUB
  }

  return (<div className='App'>
      <Header title="StockView"/>
      <Button title="Add Stock" onClick={addStock}/>
      <Button title="Delete Stock" onClick={removeStock} />
      <Stocks stocks={stocks} />
      <Footer />
    </div>);
}

export default App;
