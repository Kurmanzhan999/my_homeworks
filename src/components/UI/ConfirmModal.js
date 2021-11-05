import React from 'react'
import Button from './Button'
import Card from './Card'
import classes from './ConfirmModal.module.css'

 const ConfirmModal = props =>{
    return(
        <div className={classes.backdrop} onClick={props.onConfirm}>
         <Card className={classes.modal}>
            <header className={classes.header}>
                <p className={classes.text} >Are you sure to delete?</p>
                <footer className={classes.actions}>
                <Button onClick={props.onDelete}> Cancel</Button>
                <Button onClick={props.onCancel}> Confirm</Button>
                </footer>
            </header>
        </Card>
     </div>
     
    )
}
export default ConfirmModal;