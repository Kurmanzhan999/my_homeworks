import React, { useState } from 'react'
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
    function Submitchik(e){
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
        <div>
        <form onSubmit={() => {Submitchik()}}>
            <div>
                <p>Name</p>
                <input type='text' onChange={(e) => NameChangeHandler(e)} value={name}/>
                <p>text</p>
                <input type='text' onChange={(e) => TextChangeHandler(e)} value={text}/>
                <p>Date</p>
                <input type='date' onChange={(e) => DateChangeHandler(e)} value={date}/>
            </div>
            <button type='submit' onClick={(e) => {Submitchik(e)}}>add</button>
        </form>
        </div>
    )
}
export default Form;