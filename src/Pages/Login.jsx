import styled from "styled-components"

const Container = styled.div`
width: 100vw;
height: 100vh;
background: url("https://images.pexels.com/photos/1546027/pexels-photo-1546027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ) center;
display: flex;
  
align-items: center;
justify-content: center;
 
`
const Wrapper = styled.div`
width:25%;
padding:20px;
background-color: #315a45;
border-radius: 10px;


`
const Title = styled.form`
color: white;
font-size: 24px;
font-weight: 300;
margin-left: 10px;

`
const Form = styled.h1`

display: flex;
flex-direction: column;

`
const Input = styled.input`
 flex: 1;
min-width: 40%;
margin-right: 10px;
margin-top: 20px;
margin-left: 10px;
margin-bottom: 10px;
padding: 10px;
border-radius: 5px;



`
 
const Button = styled.button`
width: 40%;
border: none;
padding: 10px 10px;
margin-left: 10px;
margin-bottom: 10px;
background-color: #e0ebd0;
cursor: pointer;
border-radius:5px;
margin-top: 10px;


`
const Link =styled.a`
    margin: 10px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    margin-left: 10px;

`



const Login = () => {
  return (
    <Container>  
           <Wrapper>
        <Title>SIGN IN</Title> 
        <Form>
            <Input placeholder="user name"/>
            <Input placeholder="password"/>
             
            <Button>LOGIN</Button>
            <Link>Frogot Password?</Link>
            <Link>Create a new Account</Link>
        </Form>
       </Wrapper>
    </Container>
  )
}

export default Login