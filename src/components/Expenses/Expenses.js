import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("2020");

  const filterChangedHandler = (year) => {
    setYearFilter(year);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === parseInt(yearFilter, 10)
  );

  let expensesContent = <p>No expenses found.</p>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onChangeFilter={filterChangedHandler}
          year={yearFilter}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
