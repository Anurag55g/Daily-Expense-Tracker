import React from 'react'
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem"
import Card from '../UI/Card'

const Expenses = (props) => {
    return (
        // here we store all return in Card div 
        // because we will apply card css to round the corner of outer div
        <Card className='expenses'>
            {
                props.item.map(
                    expense => (
                        <ExpenseItem
                            date={expense.date}
                            title={expense.title}
                            amount={expense.amount} />
                    )
                )
            }
        </Card>
    )
}

export default Expenses