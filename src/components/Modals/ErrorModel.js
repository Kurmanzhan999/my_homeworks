import React from 'react'
import  ReactDOM  from 'react-dom';
import Backdrop from '../UI/Backdrop';
import ErrorModalLay from '../Modals/ErrorModalLay'

const ErroRModel = props => {
    return (
        <> 
        {ReactDOM.createPortal(
            <Backdrop onConfirm={props.onConfirm}/>,
            document.getElementById('backdrop-root')
        )}
        {ReactDOM.createPortal(
            <ErrorModalLay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,
                document.getElementById('modal-root')
        )}
    
 </>

    )
}
export default ErroRModel;