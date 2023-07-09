import React,{useState} from 'react'
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from './components/NewExpenses/NewExpenses';

// making a empty array to store expenses
const expenseList=[]
const App= ()=> {
  const[expenses,setExpense] = useState(expenseList)

  // fetch('https://reqres.in/api/users?page=2').then(
  //   response=>{
  //     return response.json
  //   }
  // ).then(
  //   data=>{
  //     setExpense(data)
  //   }
  // )
  
  const addExpenseHandler = (expense)=>{
      setExpense([expense])
  }

  return (
    <div>
      {/* this line is helping to get input data from child component (ExpenseForm.js) */}
      <NewExpenses onAddExpense={addExpenseHandler}/>

      {/* this line is helping to send expense data to child component (Expenses.js) to display the value */}
      <Expenses item={expenses}></Expenses>
    </div>
  )
}

export default App; 