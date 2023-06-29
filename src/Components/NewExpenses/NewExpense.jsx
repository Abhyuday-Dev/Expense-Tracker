import React, { useState } from 'react'
import "../NewExpenses/NewExpense.css";
import ExpenseForm from './ExpenseForm';

export default function NewExpense(props) {
  const [isEditing,setIsediting]=useState(false);

  const saveExpenseDataHandler=(enteredExpenseData)=>{
    const expenseData={
      ...enteredExpenseData,
      id:Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsediting(false);
  }
  const startEditingHandler=()=>{
    setIsediting(true);
  };

  const stopEditingHandler=()=>{
    setIsediting(false);
  };
  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/> }
    </div>
  )
}
