import './App.css'
import Header from './components/Header'
import AddButton from './components/AddButton'

function App() {

  const onClick = () => {
    console.log("test")
  }

  return (<div className='App'>
      <Header title="StockView"/>
      <AddButton title="Click Me" onClick={onClick}/>
    </div>);
}

export default App;
