import React from 'react'
import "./Card.css"

const Card = (props)=>{
    // making variable to get classname of Card div(line-8) from ExpenseItem.js 
    // and adding two class in one variable
    const classes = "card " + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;