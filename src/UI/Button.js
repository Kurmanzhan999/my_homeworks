import React from "react";
import styled from 'styled-components';

 export const  Button1 = styled.button `
 background-color: ${(props )=>props.backgroundColor};
width: 200x;
text-align: center;
font-size: 16px;
border-radius: 8px 10px 20px 10px;
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