 
import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:   url("https://cdn.mwallpapers.com/photos/celebrities/hd-wallpapers/macro-rain-water-drops-leaves-photography-blurred-android-iphone-hd-wallpaper-background-downloadhd-wallpapers-desktop-background-android-iphone-1080p-4k-kvjp8.jpg" ) center;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width:40%;
    padding:20px;
    background-color: #538845;
    border-radius: 10px;


`
const Title = styled.form`
    color: #080707;
    font-size: 24px;
    font-weight: 300;
    margin-left: 10px;

`
const Form = styled.h1`
    
    display: flex;
    flex-wrap: wrap;
     
     
     

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
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
    margin-left: 10px;
     

`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    margin-left: 10px;
    background-color: #08350a;
    cursor: pointer;
    border-radius:5px;

    
`

const Register = () => {
  return (
    <Container>  
       <Wrapper>
        <Title>CREATE AN ACCOUNT</Title> 
        <Form>
            <Input placeholder="name"/>
            <Input placeholder="last name"/>
            <Input placeholder="username"/>
            <Input placeholder="email"/>
            <Input placeholder="password"/>
            <Input placeholder="confirm password"/>
            <Agreement> By creating  an account, I consent to the processing of my personal
                data in accordance with the  <b>PRIVACY POLICY </b>
            </Agreement>
            <Button>CREATE</Button>
        </Form>
       </Wrapper>
    </Container>
  )
}

export default Register