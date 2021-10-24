import React, { useState } from "react"
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';


const NewExpense = (props) => {
    //lifting up method
    const saveExpenseDataHundler = (enteredExpenseData) => {
        // console.log(enteredExpenseData);
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData)
    }
    const Look =() => {
        const[outlook, setoutlook]= useState(true);
        return (
            <div>
                <button onClick={()=> setoutlook(true)}>Show up</button>
                <p>------------------------ or ------------------------</p>
                <button onClick={()=> setoutlook(false)}>Close down</button>
                {outlook &&  <ExpenseForm onSaveExpenseData={saveExpenseDataHundler} />  }
            </div>
        )
    }

    return <div className='new-expense'>
        <Look/>

    </div>
}

export default NewExpense;