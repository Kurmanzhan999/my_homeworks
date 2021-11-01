import React from "react";
import styled from 'styled-components';

 export const  Button = styled.button `
background-color: ${(props )=>props.backgroundColor};
display: flex;
align-items: center;
margin: auto;
width: 100px;
text-align: center;
font-size: 16px;
border-radius:10px;
cursor: pointer;
&:hover {
 background-color :white ;
}

`
//  const Button = props =>{
//         return (
//             <button
//              type = {props.type} 
//              onClick={props.onClick}
//              >
//             {props.children}
//             </button>
//         )
//  }

//  <Button type = 'submit' onClick={()=>{}}>View more</Button>