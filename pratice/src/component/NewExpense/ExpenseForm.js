import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHanddler = (event) =>{
        setEnteredTitle(event.target.value)
    };
    const amountChangehandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log(event);
    };
    const datechangeHandler = (event) =>{
        setEnteredDate(event.target.value);
        console.log(event);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        } 
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onSaveExpenseData(expenseData);
    };   

  return(
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHanddler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min='0.01' step="0.01" value={enteredAmount} onChange={amountChangehandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2025-12-30" value={enteredDate} onChange={datechangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button tupe="submit">Add Expense</button>
        </div>
    </form>
  ) 
  
}

export default ExpenseForm;
