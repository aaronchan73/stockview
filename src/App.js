import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Stocks from './components/Stocks'
import Footer from './components/Footer'
import TotalProfits from './components/TotalProfits'
import AddStock from './components/AddStock'
import DeleteStock from './components/DeleteStock'

function App() {

  const [showAddStock, setAddStock] = useState(false);

  const [showDeleteStock, setDeleteStock] = useState(false);

  const [stocks, setStocks] = useState([{
    name: "AAPL",
    bought: 136.89
  },
  {
    name: "TSLA",
    bought: 954.56
  },
  // {
  //   name: "SBUX",
  //   bought: 111
  // },
  // {
  //   name: "NKE",
  //   bought: 130
  // },
  // {
  //   name: "PAL",
  //   bought: 100
  // }
]);

  // const addStock = (stock) => {
  //   this.setStocks = [stocks, stock];
  // }

  // const removeStock = (chosenStock) => {
  //   let newStocks = [];
  //   stocks.forEach((stock) => {
  //     if(stock !== chosenStock) {
  //       newStocks.push(stock);
  //     }
  //   });
  //   this.setStocks = [newStocks];
  // }

  // const calcProfits = () => {
  //   let profits = 0;

  //   stocks.forEach((stock) => {
  //     profits += (stock.current - stock.bought);
  //   });

  //   return profits;

  // }

  //<TotalProfits profits={calcProfits()} />

  return (<div className='App'>
      <Header title="StockView"/>
      <Button title="Add Stock" onClick={() => {setAddStock(!showAddStock)}} />
      <Button title="Delete Stock" onClick={() => {setDeleteStock(!showDeleteStock)}} />
      {showAddStock && <AddStock stocks={stocks}/>}
      {showDeleteStock && <DeleteStock stocks={stocks}/>}
      <Stocks stocks={stocks}/>
      <Footer />
    </div>);

}

export default App;
