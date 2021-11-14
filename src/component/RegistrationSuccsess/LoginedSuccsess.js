import React from 'react';
import classes from './LoginedSuccses.module.css';
import images from '../../assets/images.jpg'

const LoginSuccess = ()=>{
    return(
        <>
            <h1 className={classes.success}>You Entered These Page</h1>
            <img className={classes.img} src={images} alt="piechart" height="400px" width="400px"></img>
       </>
 )
}
export default LoginSuccess;