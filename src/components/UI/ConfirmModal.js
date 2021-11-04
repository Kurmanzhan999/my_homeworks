import React from 'react'
import Button from './Button'
import Card from './Card'
import classes from './ConfirmModal.module.css'

export const ConfirmModal = props =>{
    return(
        <Card className={classes.modal}>
            <header className={classes.header}>
                <p className={classes.text} >Are you sure</p>
                <footer className={classes.actions}></footer>
                <Button onClick={props.onDelete}> Confirm</Button>
                <Button onClick={props.onCancel}> Cansel</Button>

            </header>
        </Card>
    )
}