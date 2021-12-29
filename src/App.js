import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Stocks from './components/Stocks'
import Footer from './components/Footer'
import AddStock from './components/AddStock'
// import TotalProfits from './components/TotalProfits'

function App() {

  const [showAddStock, setAddStock] = useState(false);

  const [stocks, setStocks] = useState([{
    id: 1,
    name: "AAPL",
    bought: 136.89
  },
  {
    id: 2,
    name: "TSLA",
    bought: 954.56
  },
  {
    id: 3,
    name: "SBUX",
    bought: 111.99
  },
  {
    id: 4,
    name: "NKE",
    bought: 167.21
  }
]);

  // const calcProfits = () => {
  //   let profits = 0;

  //   stocks.forEach((stock) => {
  //     profits += (stock.current - stock.bought);
  //   });

  //   return profits;

  // }

  //<TotalProfits profits={calcProfits()} />

  const deleteStock = (id) => {
    setStocks(stocks.filter((stock) => stock.id !== id));
  }

  return (<div className='App'>
      <Header title="StockView"/>
      <Button title="Add Stock" onClick={() => {setAddStock(!showAddStock)}} />
      {showAddStock && <AddStock stocks={stocks}/>}
      {stocks.length > 0 ? <Stocks stocks={stocks} onDelete={deleteStock}/> : <div><br/><h2>Add a stock using the button above.</h2><br/></div>}
      <Footer />
    </div>);

}

export default App;
