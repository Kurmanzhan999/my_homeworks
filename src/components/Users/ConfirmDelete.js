import React ,{useState}from 'react'
import Button from '../UI/Button';
import { ConfirmModal } from '../UI/ConfirmModal';
import classes from './ConfirimModal.module.css'
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
        <Button onClick={deleteHundler}>delete</Button>
        {show ? <ConfirmModal onDelete={onDelete} onCancel = {()=>setShow(false)}/>: ''}
        </li>
    )
    
}