import React, { useState } from 'react'
import '../Expenses/ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

export default function Expenses(props) {

  const [filteredYear,setFilteredYear]=useState('2020');
  const filterChangeHanler=selectedYear=>{
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  });


  return (
    <div>
    <Card className='expenses'>
    <ExpenseFilter selectedItem={filterChangeHanler}
    selected={filteredYear}
    />
    <ExpensesChart expenses={filteredExpenses}/>
   <ExpensesList items={filteredExpenses}/>
         
    </Card>
    </div>
  )
}
   