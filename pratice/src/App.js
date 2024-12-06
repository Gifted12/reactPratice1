import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";
  const DUMMY_EXPENSES = [
    // { id:'1a', title: "Car insurance", amount: 24.67, date: new Date(2024, 2, 28) },
    // { id:'1b', title: "Tv insurance1", amount: 394.67, date: new Date(2022, 5, 28) },
    // { id:'1c', title: "Car insurance2", amount: 1294.67, date: new Date(2024, 7, 28) },
    // { id:'1d', title: "Car insurance3", amount: 294.67, date: new Date(2024, 2, 28) },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

   console.log(expenses)
   expenses.toLocaleString('List', expenses);

  const addExpenseHandler =(expense)=>{
    setExpenses((prev)=>{
      return [expense, ...prev];
    });
  };
  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler} />
    <Expenses items={expenses}/>
    </div>
  );
}

export default App;
