import React, {useState}from 'react';
import styled from 'styled-components';
import { Wrapper } from './Wrapper';
import  { Button } from '../../UI/Button';
import { Title, Title1, Title2 } from '../../UI/Title';
import { Text, Text1, Text2 } from '../../UI/Text';
import './Block1.css'

export const Block = styled.div `
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
width:400px;
height: 500px;
background-color: #347C98;
margin-top: 30px;
border-radius: 20px;
`

export default function Main() {
  function myFunction() {  // eto ne ochen' horoshii variant no jasap kordum
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
    const WithUseState = () => {
    const[isRead,setIsRead]=useState(true);
        return(
          <div>
             <Title> JavaScript</Title>
               {isRead && <Text1>JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time
               a web page does more than just sit there and display static information for you to look at 
               — displaying timely  content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. 
                      </Text1> } 
            <Button onClick={()=>setIsRead(false)} backgroundColor="red">close</Button>
            <Button onClick={()=>setIsRead(true)} backgroundColor="orange">open and read</Button>
         </div>
      )}
    return (
        <Wrapper>
           <Block>
                 <Title1>Java</Title1>
                 <Text> Java is a programming language and computing platform first released by Sun Microsystems in 1995. It has evolved
                         from humble beginnings to power a large share of today’s digital world, by providing the reliable platform 
                         upon which many services and applications are built.
                         <span id="dots">...</span>
                         <span id="more" > New, innovative products and digital services designed for 
                         the future continue to rely on Java, as well. </span>
                 </Text>
                 <Button onClick={myFunction} id='myBtn'  backgroundColor="red"> View more</Button>
           </Block> 
           <Block> 
                 <WithUseState/>
           </Block>
           <Block>
                <Title2>PYTOn</Title2>
                <Text2>Python is an interpreted high-level general-purpose programming language. Its design philosophy
                    emphasizes code readability with its use of significant indentation. Its language constructs as well 
                    as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.
                </Text2>
                <Button onClick={ ()=>{alert('Pyton.com')}} backgroundColor="yellow"> Show web site</Button>
           </Block>
      </Wrapper>
    )
}