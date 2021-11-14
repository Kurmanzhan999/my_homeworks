import './App.css';
import React,{useState} from 'react'
import Login from './component/Login/Login';
import LoginSuccess from './component/RegistrationSuccsess/LoginedSuccsess';
import Header from './component/Header/Header'

function App() {
  const [formIsSubmitted,setFormIsSubmitted]=useState(false);
 const submitForm = ()=> {
   setFormIsSubmitted(true);
 }
  return (
    <div className='App'>
      <div>
      <Header/>
      </div>
     {!formIsSubmitted ? <Login submitForm={submitForm}/> : <LoginSuccess/>}
    </div>
  );
}

export default App;
