import React, {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErroRModel from '../UI/ErrorModel';
import classes from './AddUser.module.css';
const AddUser = props => {
     const [enteredUsername, setEnteredUsername] = useState('');
     const [enteredAge, setEnteredAge] = useState('');
     const [error,setError]=useState(); 

     const usernameChangeHandler = (event) => {
         setEnteredUsername(event.target.value)
     }

     const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }
    const addUserHandler =(event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title:'Invalid input',
                message:'Please enter a valid name and age(non-empty values)'
            })

            return;
        }
        if(+enteredAge <1 ){
            setError({
                title:'Invalid age',
                message:'Please enter a valid age (>0)',
            })
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredAge('');
        setEnteredUsername('');

    }
    const errorHundler =() => {
        setError(null);
    }
     
    return (
        <div>
          {error &&  <ErroRModel tittle ={error.title} message={error.message} onConfirm ={errorHundler}/>}
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
                  <Button  type='submit'>Add User</Button>
                  {/* <button type="submit">Add User</button> */}
        </form>
        {/* {console.log(enteredUsername)} */}

        </Card>
        </div>
        
      
    )
}
export default AddUser;