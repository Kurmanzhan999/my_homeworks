
import React, { useState,useEffect,useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

// const emailReducer = (prevState, action) => { //reducerFn
//   if(action.type === 'USER_INPUT'){ //enteredEmail
//   return{
//     value:action.value,
//   isvalid: action.value.includes('@'),
//   }
// }
//   if(action.type === 'INPUT_WARNING')  //proverka
//   return{
//     value:prevState.value, 
//     isvalid: prevState.value.includes('@'),
//   }
// }

// const passwordReducer = (prevState,action) => {
//   if(action.type === 'USER_INPUT'){ //enteredPassword
//     return{
//       value:action.value,
//     isvalid:  action.value.trim().length >6,
//     }
//   }
//     if(action.type === 'INPUT_WARNING')  //proverka
//     return{
//       value:prevState.value, 
//       isvalid:  prevState.value.trim().length >6,
//     }
//   }

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState(''); // pole vvoda email
  const [emailIsValid, setEmailIsValid] = useState(); // proverka polya true/false
  const [enteredPassword, setEnteredPassword] = useState(''); // pole vvoda password
  const [passwordIsValid, setPasswordIsValid] = useState(); // proverka polya true/false
  const [formIsValid, setFormIsValid] = useState(false); // proverka polei (2 inputa)

//   const [emailState, dispatchEmail] = useReducer(emailReducer, {  //dispachEmail emailReducerdi ishtetet
//     value:'', //enteredEmail  // initialstate ishodnoe sostoyanie
//     isvalid: false,
//   })

//   const [passwordState,dispachPassword]=useReducer(passwordReducer,{
//     value:'', 
//     isvalid: false,
//   })

//   const {isvalid: emailIsValid} = emailState;
//   const {isvalid: passwordIsValid} = passwordState;
  

// useEffect(()=> { // s useEffect otprovlyaem zapros backend
//    const timer= setTimeout(() => { //timer degen peremennyiga setTimeout chakyrabyz,3 sekund berebiz userge
//       setFormIsValid( // srazu proveryaet i email i password
//         emailState.isvalid && passwordState.isvalid
//        );
//     },3000)
//     return() => { //clean up function
//       clearTimeout(timer); // bul ochistka kylat timerdi,kancha jolu jazsak oshonu tazalait i potom useEffect ishteit.
//      // Anan biz myndai pol'zovatel' bar ili registrasiya kyl degen modalkany tuzup koisok bolot
//      // Esli biz ar bir jazgan bukvabyzdy zapros kylp jonoto bersek tura emes bolot.
//     }
//   }, [emailIsValid, passwordIsValid])


//   const emailChangeHandler = (event) => {
//     dispatchEmail({type:"USER_INPUT", value:event.target.value}); //action \ dispach reducerFnge barat t.e emailReducer
 
//   setFormIsValid(
//     event.target.value.includes('@') && passwordState.value.trim().length > 6
//   );
// };

// const passwordChangeHandler = (event) => {
//   dispachPassword({type:"USER_INPUT",value: event.target.value})
//   setFormIsValid(
//     event.target.value.trim().length > 6 && emailState.value.includes('@')
//   );
// };


//   const validateEmailHandler = () => {
//     dispatchEmail({type:"INPUT_WARNING"})  //razmytie inputa
//   }

//   const validatePasswordHandler = () => {
//   dispachPassword({type:"INPUT_WARNING"}) 
//        };
//   const submitHandler = (event) => {
//      event.preventDefault();
//      props.onLogin(emailState.value, passwordState.value);
//             };


//   return (
//     <Card className={classes.login}>
//       <form onSubmit={submitHandler}>
//         <div
//           className={`${classes.control} ${
//            emailState.isvalid === false ? classes.invalid : '' // emailIsValid === false bolso anda classes invalidti kaitar je je echnerse kaitarba dep jatabyz t.e input kyzyl tusto bolot (css)
//           }`}
//         >
//           <label htmlFor="email">E-Mail</label>
//           <input
//             type="email"
//             id="email"
//             value={emailState.value}
//             onChange={emailChangeHandler}
//             onBlur={validateEmailHandler}
//           />
//         </div>
//         <div
//           className={`${classes.control} ${
//            passwordState.isvalid  === false ? classes.invalid : '' // bul jerde dele email degidei
//           }`}
//         >
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={passwordState.value}
//             onChange={passwordChangeHandler}
//             onBlur={validatePasswordHandler}
//           />
//         </div>
//         <div className={classes.actions}>
//           <Button type="submit" className={classes.btn} disabled={!formIsValid}> 
//           {/* button but frmany teksherip jatat,formIswalid bolboi kalsa login ishtebe kalat (css) */}
//             Login
//           </Button>
//         </div>
//       </form>
//     </Card>
//   );
// };



                // ........... HomeWork 43 ..................////////////

  ///////////////  with useEffect //////// and without useEffect

 useEffect(()=> { // s useEffect otprovlyaem zapros backend
 const timer= setTimeout(() => { //timer degen peremennyiga setTimeout chakyrabyz,3 sekund berebiz userge
    setFormIsValid( // srazu proveryaet i email i password
      enteredEmail.includes('@') && enteredPassword.trim().length > 6 
     );
  },3000)
  return() => { //clean up function
    clearTimeout(timer); // bul ochistka kylat timerdi,kancha jolu jazsak oshonu tazalait i potom useEffect ishteit.
    // Anan biz myndai pol'zovatel' bar ili registrasiya kyl degen modalkany tuzup koisok bolot
    // Esli biz ar bir jazgan bukvabyzdy zapros kylp jonoto bersek tura emes bolot.
  }
},[enteredEmail,enteredPassword]) //dependeciseterdi t.e email menen password zavisyat drug ot druga


  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value); //user jazgan emaildi alyp entered emilge saktaibyz
//i setFormValiddi chakyrabyz,al kairadan user jazgan emaildi teksherip emilde @ barby jokby teksheret. Bul jerde proverka butpoit
    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  //emi user jazgan passwordu alabyz,setFormValiddi chakyryp kairadan daanyilardy al teksherip 
  //passworddun uzundugu bez probelov 6 dan kem bolboso,emailde @ bar bolso,ekoo ten true bolot dagy proverka butup Login ishteit
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

// kairadan email i passwordu teksherip jatkanybyzdyn logikasy bir ele:ekooten biz koigon sharttardy ozorunun state ine saktait(emailIsValid,passworIsvalid),
//antkeni bular div ke classtardy koshup ishtetkenge kerek bolot

 const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : '' // emailIsValid === false bolso anda classes invalidti kaitar je je echnerse kaitarba dep jatabyz t.e input kyzyl tusto bolot (css)
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredemeil.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : '' // bul jerde dele email degidei
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}> 
          {/* button but frmany teksherip jatat,formIswalid bolboi kalsa login ishtebe kalat (css) */}
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
