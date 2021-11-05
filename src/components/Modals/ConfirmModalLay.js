import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from '../UI/ConfirmModal.module.css';

const ConfirmModalLay = props => {
    return ( 
        <Card className={classes.modal}>
           <header className={classes.header}>
              <p className={classes.text} >Are you sure to delete?</p>
              <footer className={classes.actions}>
              <Button onClick={props.onDelete}> Cansel </Button>
              <Button onClick={props.onConfirm}> Confirm </Button>
              </footer>
           </header>
       </Card>
    )}

export default ConfirmModalLay;