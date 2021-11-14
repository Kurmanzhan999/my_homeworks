import React,{useState,useEffect} from 'react'
import Validation from '../Validation/Validation';
import classes from './Login.module.css';
import Card from '../UI/Card';

const Login = ({submitForm}) => {
    const [values, setValues]=useState({
        name: "",
        email: "",
        password: ""
    });


 const [errors, setErrors]=useState({});
 const [loginIsCorrect,setLoginIsCorrect]=useState(false);

 const handleChange =(event)=>{
    setValues({
        ...values,
        [event.target.name] : event.target.value,
    })
}
const formSubmit = (event)=> {
    event.preventDefault();
    setErrors(Validation(values));
    setLoginIsCorrect(true);
};
useEffect(() => {
    if(Object.keys(errors).length === 0 && loginIsCorrect) {
      submitForm(true);
    }
},[errors]);
   
    

    return(
        <Card className={classes.login}>
         <form onClick={formSubmit}>
            <div className={classes.main}>
             <label htmlFor="text"> User Name </label>
                <input
                    type='text'
                    id='text'
                     placeholder="Enter Your Name"
                    name='username'
                    values={values.username}
                     onChange={handleChange}
                />
                 {errors.username && <p className={classes.error}> {errors.username}</p>}
            </div>
         <div className={classes.main}>
             <label htmlFor="email"> E-mail </label>
                 <input  type='email' 
                        id='email'
                        placeholder="Enter Your Email"
                        name='email'
                        values={values.email}
                        onChange={handleChange}
                    />
                 {errors.email && <p className={classes.error}> {errors.email}</p>}
         </div>
         <div className={classes.main}>
             <label htmlFor="password"> Password </label>
                 <input  type='password' 
                        id='password'
                        placeholder='Enter Your Password'
                        name='password'
                        values={values.password}
                        onChange={handleChange}
                    />
                {errors.password && <p className={classes.error}> {errors.password}</p>}
         </div>
         <button onClick={formSubmit} >Sing up</button>
        </form>
     </Card>
   )
}

export default Login;
