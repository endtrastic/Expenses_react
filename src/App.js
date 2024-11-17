import './App.css';
import Expenses from './components/Expenses';

const App = () => {

  const expenses = [
    {
      date: new Date(2024, 10, 12),
      title: 'New book',
      price: 30.99
    },
    {
      date: new Date(2024, 10, 12),
      title: 'New jeans',
      price: 99.99
    }
  ]


  return (
    <div className="App">
      <div className="expenses">
      <Expenses data={expenses[0]}/>
      <Expenses data={expenses[1]}/>
      </div>
    </div>
  )
}

export default App;
