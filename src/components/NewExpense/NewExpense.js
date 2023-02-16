import { React, useState } from "react";
import './NewExpense.css'

import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const [toggle, setToggle] = useState(false)

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData)
  };

  const toggleHandler = () => {
    setToggle(!toggle)
  }

  if (toggle === false) {
    return (
      <div className="new-expense">
        <button onClick={toggleHandler}>Add Expense</button>
      </div>
    )
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onToggleHandler={toggleHandler} />
    </div>
  )
}

export default NewExpense
