import { ContactMailTwoTone, Facebook, Instagram,Room, MailOutlined, Phone, Pinterest, SocialDistanceOutlined, Twitter } from "@mui/icons-material"
import styled from "styled-components"

 
 const Container = styled.div`
    display: flex;
 `
 const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;


 `
 const Logo = styled.h1`
 `
 const Desc = styled.p`
 margin: 20px 0px;

 `
 const SocialContainer = styled.div`
 display: flex;

 `
 const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color:  #${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
 `

 const Center = styled.div`
    flex: 1;
    padding: 20px;
 `
 const Title = styled.h3`
  margin-bottom: 30px;
 `
 const List  = styled.ul `
   margin: 0;
   padding: 0;
   list-style: none;
   display: flex;
   flex-wrap: wrap;

 `
 const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
 `


 const Right = styled.div`
    flex: 1;
    padding: 20px;
 `
 const ContactItem = styled.div`
   margin-bottom: 20px;
   display: flex;
   align-items: center;

 `
 const Payment = styled.img`
    width: 50%;

 `

const Footer = () => {
  return (
    <Container> 
         <Left>
            <Logo>AgriGlobe</Logo>
            <Desc>All kind of data related to agriculture are available here

            </Desc>
            <SocialContainer>
                <SocialIcon color="385999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
         </Left>
         <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home </ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Purchases</ListItem>
                <ListItem>Fertilizers</ListItem>
                <ListItem>Pesticides</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Terms</ListItem>
 
            </List>
         </Center>
         <Right>
            <Title>Contact Us</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/> H block, Alpha 2, Greater Noida, Uttar Pradesh</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}} /> +91 8765432198</ContactItem>
            <ContactItem><MailOutlined style={{marginRight:"10px"}} /> contact@gmail.com</ContactItem>
             <Payment src="data:image/png;base64,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"/>
         </Right>
    </Container>
  )
}

export default Footer