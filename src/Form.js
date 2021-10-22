import React, { useState } from 'react'
import './Form.css'
function Form(props){
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    function NameChangeHandler(e){
        setName(e.target.value)
    }
    function TextChangeHandler(e){
        setText(e.target.value)
    }
    function DateChangeHandler(e){
        setDate(e.target.value)
    }
    function SubmitHandler(e){
        e.preventDefault();
        let data = {
            name: name,
            comment: text,
            date: date
        }
        props.add(data)
        setDate('')
        setName('')
        setText('')
    }
    return(
        <div className="inputs">
            <p>Leave Your Comment</p>
        <form onSubmit= {SubmitHandler}>
            <div>
               <label for="name">User name:</label>
                <input  id="name" type='text' onChange={ NameChangeHandler} />
                <p> Write comment </p>
                <input type='text' onChange={ TextChangeHandler}/>
                <p> Choose date</p>
                <input type='date' onChange={ DateChangeHandler}/>
            </div>
            <button type='submit' onClick= {SubmitHandler}>Add comment</button>
        </form>
        </div>
    )
}
export default Form;