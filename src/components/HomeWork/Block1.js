import React from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button';

export const Block = styled.div `
display: flex;
flex-direction: column;
border:1px solid black;
width:400px;
height: 370px;
background-color: red;

`

/* const Cards = styled.div `
display: flex;
heigth:80%;
width:100%;
margin:auto;

`
const Button = styled.button `
width:50px;
margin:auto; */

// `


export default function Block1() {
    
    return (
        
        <div>
         <div>
            {/* <Block>
                <h1>Heading</h1>
                <p> Lorem </p>
                
                <Button onClick="Modalka" > View more</Button>
            </Block>

      
            <Block>
                <h1>Heading</h1>
                <p> Lorem </p>

                <Button> View more</Button>
            </Block>
             */}
            <div>
                <h1>Heading</h1>
                <p> Lorem </p>
                 <Button type = 'submit' onClick={()=>{}}>View more</Button>

                {/* <Button> View more</Button> */}
            </div>
       </div>
            
            
        </div>
    )
}
