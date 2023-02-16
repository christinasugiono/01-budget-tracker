import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("2020");

  const filterChangedHandler = (year) => {
    setYearFilter(year);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === parseInt(yearFilter, 10)
  );


  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onChangeFilter={filterChangedHandler}
          year={yearFilter}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
