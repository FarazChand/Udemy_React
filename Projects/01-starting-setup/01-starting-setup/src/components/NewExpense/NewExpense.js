import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random(),
    };

    props.onNewExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={saveDataHandler} />
    </div>
  );
};

export default NewExpense;
