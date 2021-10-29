import React, {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';

import classes from './AddUser.module.css';
const AddUser = props => {
     const [enteredUsername, setEnteredusername] = useState('');
     const [enteredAge, setEnteredAge] = useState('');

     const usernameChangeHandler = (event) => {
         setEnteredusername(event.target.value)
     }

     const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }
    const addUserHandler =(event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }
        if(+enteredAge <1 ){
            return;
        }
        
        props.onAdduser(enteredUsername,enteredAge);
        setEnteredAge('');
        setEnteredusername('');
    }
     
    return (
        <Card className= {classes.input}>
  <form onSubmit={addUserHandler}>
            <label htmlFor="username">  UserName  </label>
            <input id="username" 
            type ="text"
            onChange={usernameChangeHandler}
            value ={enteredUsername}
            />
                  <label htmlFor="age"> Age(years)</label>
                  <input id="age" 
                  type ="number"
                  onChange={ageChangeHandler}
                  value={enteredAge}
                  />
                  <Button type='submit'>Add User</Button>
                  {/* <button type="submit">Add User</button> */}
        </form>
        {console.log(enteredUsername)}

        </Card>
      
    )
}
export default AddUser;