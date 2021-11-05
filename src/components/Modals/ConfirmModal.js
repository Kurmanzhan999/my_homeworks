import React from 'react'
import  ReactDOM  from 'react-dom'
import Backdrop from '../UI/Backdrop'
import ConfirmModalLay from './ConfirmModalLay'

 const ConfirmModal = props =>{
    return(
        <>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm}/>,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ConfirmModalLay onDelete={props.onDelete} onConfirm={props.onConfirm}/>,
                document.getElementById('modal-root')
            )}
        </>
     
    )
}
export default ConfirmModal;
