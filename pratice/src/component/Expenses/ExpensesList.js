import React from 'react'
import './Expenseslist.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {

  if (props.items.length === 0){
    return(
      <h2 className='expenses-list_fallback'>Found no expenses.</h2>
    )
    }
    return <ul className='expensess-list'>
      {props.items.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </ul>
  
}

export default ExpensesList
