import React from 'react';
import styled from 'styled-components';

const Block = styled.div `
display: flex;
flex-direction: column;
border:1px solid black;
heigth:400px;
width:400px;

`

const Cards = styled.div `
display: flex;
heigth:80%;
width:100%;
margin:auto;

`
const Button = styled.button `
width:50px;
margin:auto;

`


export default function Blocks() {
    
    return (
        
        <div>
         <Cards>
            <Block>
                <h1>Heading</h1>
                <p> Lorem </p>
                
                <Button onClick="Modalka" > View more</Button>
            </Block>

      
            <Block>
                <h1>Heading</h1>
                <p> Lorem </p>

                <Button> View more</Button>
            </Block>
            
            <Block>
                <h1>Heading</h1>
                <p> Lorem </p>
                <Button> View more</Button>
            </Block>
       </Cards>
            
            
        </div>
    )
}
