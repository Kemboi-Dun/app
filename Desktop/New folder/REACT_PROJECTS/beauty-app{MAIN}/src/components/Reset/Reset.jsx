import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
background-color: #BE5050;
display:flex;
justify-content:space-around;
height:100vh;
`
const Sect1 = styled.div`
margin:auto;
display:flex;
flex-direction:column;
`
const Icon = styled.div``
const Icondesc = styled.p`
color:#fff;
line-height:16px;
font-size:24px;
font-weight:bold;
`
const Sect2 = styled.div`
background-color:#fff;
width:100vh;
text-align:center;
padding:128px 0;

`
const Title = styled.h1`
text-align:center;
`
const Form = styled.form`
display:flex;
flex-direction:column;
text-align:center;
`
const Label = styled.label`
margin:12px 0;
text-decoration:none;
`
const Input = styled.input`
width: 50%;
height:56px;
border-radius:6px;
border:1px solid #000;
text-align:center;
`
const Button = styled.div`
background: #be5050;
box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.15);
width:50%;
margin:auto;
height:26px;
color:#fff;
font-weight: 700;
font-size: 21px;
line-height: 25px;
padding:12px 0;
border-radius:4px;
cursor:pointer;

&:hover{
    background:#000;
    color:#fff;
}
`


const Signup = () => {
  return (
    <Container>
<Sect1>
<Icon>
    
    <Icondesc>
        Logo
    </Icondesc>
</Icon>
</Sect1>
<Sect2>
<Title>Password Reset</Title>
<Form>
  
    <Label>
        <Input type="email" placeholder="Email Address"/>
    </Label>
   
</Form>
<Button>
    Submit
</Button>

</Sect2>
    </Container>
  )
}

export default Signup