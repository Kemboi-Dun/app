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
`
const Title = styled.h1`
text-align:center;
`

const Button = styled.div`
background: linear-gradient(180deg, #EC671C 0%, #DD2B2B 98.44%);
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
const Lower = styled.div`
justify-content:center;
`
const Google = styled.div`
background: #dd4b39;
box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.15);
width:50%;
margin:auto;
height:26px;
color:#fff;
font-weight: 400;
font-size: 18px;
line-height: 25px;
padding:12px 0;
border-radius:4px;
cursor:pointer;


&:hover{
    background:#000;
    color:#fff;
}`
const Facebook = styled.div`
background:#415dae;
box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.15);
width:50%;
margin:auto;
height:26px;
color:#fff;
font-weight: 400;
font-size: 18px;
line-height: 25px;
padding:12px 0;
border-radius:4px;
cursor:pointer;

&:hover{
    background:#000;
    color:#fff;
}`
const Buttondesc = styled.div`
display:flex;
width:31%;
margin:auto;
`
const Span = styled.p`
color:#dd4b39;
font-weight:bold;
cursor:pointer;

&:hover{
    color:#000;
}
`
const Desc = styled.p`
font-weight:500;
font-size:18px;
`
const Btn = styled.div`
margin:16px 0 ;
`
const Btndesc = styled.div`
margin:auto;

`
const Margin = styled.div`
margin:12px;
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
<Title>Sign Up </Title>
<Margin>
<Button>
    Sign Up As A client
</Button>
</Margin>

<Margin>
<Button>
    Sign Up As A Business
</Button>
</Margin>

<Lower>
    <Desc>or sign up with</Desc>
 <Btn>
 <Google>
        <Icon>

</Icon>
Continue with Google
        </Google>
 </Btn>

        <Btn>
        <Facebook>
        <Icon>

</Icon>
Continue with Facebook
        </Facebook>
     </Btn>
    
       
    
    <Buttondesc>
        <Btndesc>
        Already a member?
        </Btndesc>
         <Span>Sign in.</Span>
    </Buttondesc>
</Lower>
</Sect2>
    </Container>
  )
}

export default Signup