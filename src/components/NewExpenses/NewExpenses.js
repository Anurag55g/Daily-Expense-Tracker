import React from "react";
import './NewExpenses.css'
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props)=>{

    const onSaveExpenseDataHandler =(enteredExpenseData)=>{
        props.onAddExpense(enteredExpenseData)
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
        </div>
    ) 
}

export default NewExpenses;