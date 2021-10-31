import React from 'react';
import styled from 'styled-components';
import  { Button1 } from '../../UI/Button';
import { Title, Title1, Title2 } from '../../UI/Title';
import { Text, Text1, Text2 } from '../../UI/Text';
export const Block = styled.div `
display: flex;
flex-direction: column;
border:1px solid black;
width:400px;
height: 370px;
background-color: red;

`


export default function Block1() {
    
    return (
       <Block>
            <div>  
              <Title strong>Java</Title>
                  <Text> Java is a programming language and computing platform first released by Sun Microsystems in 1995. It has evolved
                       from humble beginnings to power a large share of today’s digital world, by providing the reliable platform 
                       upon which many services and applications are built. New, innovative products and digital services designed for 
                       the future continue to rely on Java, as well.
                        </Text>
                    <Button1 backgroundColor="red">View more</Button1>
              <Title1>JavaScript</Title1>
               <Text1>JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time
                    a web page does more than just sit there and display static information for you to look at — displaying timely 
                    content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc
              </Text1>
                 <Button1 backgroundColor="orange">Read More</Button1>
            <Title2>PYTOn</Title2>
              <Text2>Python is an interpreted high-level general-purpose programming language. Its design philosophy
                    emphasizes code readability with its use of significant indentation. Its language constructs as well
                    as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.
             </Text2>
             <Button1 backgroundColor="yellow">View More</Button1>
    </div>
                </Block>
                

               
    
    )
}
