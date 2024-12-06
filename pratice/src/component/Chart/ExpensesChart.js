import React from 'react';
import Charts from './Charts';

function ExpensesChart(props) {
    const chartDataPoint = [
        {label:'Jan', value:0},
        {label:'Feb', value:0},
        {label:'Mar', value:0},
        {label:'Apr', value:0},
        {label:'May', value:0},
        {label:'jun', value:0},
        {label:'Jul', value:0},
        {label:'Aug', value:0},
        {label:'Sep', value:0},
        {label:'Oct', value:0},
        {label:'Nov', value:0},
        {label:'Dec', value:0},
    ];
    for(const expensess of props.expense){
        const expenseMonth = expensess.date.getMonth()
        chartDataPoint[expenseMonth].value += expensess.amount ;
        
    }
    // for (let i = 0; i < props.expense.length; i++) {
    //   const element = props.expense[i];
    //   const expenseMonth = element.date.getMonth();
    //   chartDataPoint[expenseMonth].value += element.amount ;
    // }
   
  return (
    <Charts dataPoint={chartDataPoint}/>
  )
}

export default ExpensesChart;
