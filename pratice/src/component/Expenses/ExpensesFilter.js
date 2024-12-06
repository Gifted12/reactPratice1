import React from "react";
import "./ExpensesFilter.css";
function ExpensesFilter(props) {
  const myExpensefilter = (event) => {
    const myfilter = event.target.value;
    props.onChangeFilter(myfilter);
  };

  return (
    <div className="filter-div">
      <p className="filter__title">Filter by year</p>
      <select onChange={myExpensefilter} className="filter_year">
        <option>2019</option>
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
        <option>2024</option>
      </select>
    </div>
  );
}

export default ExpensesFilter;
