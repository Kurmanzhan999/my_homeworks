import React from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from '../UI/ErrorModal.module.css';

const ErrorModalLay = props => {
return (
    <Card className ={classes.modal}>
       <header className={classes.header}>
           <h2> {props.tittle}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>

     </Card>
)
    }

export default ErrorModalLay;