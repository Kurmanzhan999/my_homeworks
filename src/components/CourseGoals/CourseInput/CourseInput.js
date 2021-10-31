import React, { useState } from 'react';
// import styled from 'styled-components' 
import Button from '../../UI/Button/Button';
import styles from  './CourseInput.module.css';

// const FormControl = styled.div `
 
//   margin: 0.5rem 0;


// &label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => (props.invalid ? 'red' : 'black')};

// }
// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid  ${props => (props.invalid ? 'red' : 'black')};
//   background:  ${props => (props.invalid ? 'rgb(197, 155, 155)' : 'transparent')};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }
// &invalid input {
//   border-color: red;
//   background: rgb(197, 155, 155);
// }
// &invalid label {
//   color: red;
// }

// `

//bul brauzerden chygyp jatkan input jana label

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState(''); //enterd value-user ozunun goaldaryn jazat
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value); // goalInputChangeHandler -set enterdValueni chakyratdagy anan al event.target.value kylyp oshol
    // user jazgan nerselerdi enterdValuege chygat
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0) { //baardyk probelderdi alyp turup razmerin  sanasak 0 go barabar bolso anda isValidke false kylabyz gagy return du jazabyz,posle returna t.e return ishtep ketse astyndagy kod ishtebei kalat. Oshondo user pustoi nerse kosgom dese koshulbait.
        setIsValid(false);
        return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl invalid={!isValid}> */}
      <div className ={`${styles['form-control']} ${!isValid && styles.invalid}`} >
      <label >Course Goal</label>
        <input
        // style={{borderColor:!isValid ? 'red' : 'black' , background: !isValid ? 'salmon' : 'transparent'}}
         type="text" onChange={goalInputChangeHandler} />
      </div>
     
      {/* </FormControl> */}
      <Button type="submit">Add Goal</Button>  
      {/* bul buttondu biz component kylyp achkanbyz,i azyr any v kachestve knopki chakyryp jatbyz */}

    </form>
  );
};

export default CourseInput;
