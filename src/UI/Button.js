import React from "react";
import styled from 'styled-components';
const ButtonA = styled.button `
width: 200x;
`
 const Button = props =>{
        return (
            <button
             type = {props.type} 
             onClick={props.onClick}
             >
            {props.children}
            </button>
        )
 }

//  <Button type = 'submit' onClick={()=>{}}>View more</Button>
 export default Button;