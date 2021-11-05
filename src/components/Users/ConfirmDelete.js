import React ,{useState}from 'react'
import Button from '../UI/Button';
import ConfirmModal from '../Modals/ConfirmModal'
import classes from '../UI/ConfirmModal.module.css'

export const ConfirmDelete= props =>{

    const [show, setShow]=useState(false);

    const deleteHundler =()=>{
        setShow(true)
    }

    const onDelete =()=>{
        props.onDelete(props.id)
    }
    return(
        <li className={classes.list}>
        {props.children}
        <Button onClick={deleteHundler}> Delete it </Button>
        {show ? <ConfirmModal onDelete={onDelete} onConfirm = {()=> setShow(false)}/>: ''}
        </li>
    )
    
}
