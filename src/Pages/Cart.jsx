import {Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Container = styled.div`

`
const Wrapper = styled.div`
       padding: 20px;
`

const Title = styled.h1`
   font-weight: 300;
   text-align: center;

`

const Top = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 20px;


`
const TopButton = styled.div`
   padding : 10px;
   font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === "filled" && "none"};
  background-color : ${props => props.type === "filled" ? "black" : "transparent"};
  color: ${props => props.type === "filled" && "white"};
`
const TopTexts = styled.div`

`
const TopText = styled.span`
   text-decoration:underline;
   cursor:pointer;
   margin:0px 10px;
   
   
`
const Product = styled.div`
   display: flex;
   justify-content: space-between;

`
const ProductDetail= styled.div`
    flex: 2;
    display:flex;


`
const Image = styled.img`
   width:200px;
    padding-top: 20px;
    padding-bottom: 20px;

`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction:column;
    justify-content: space-around;

`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const PriceDetail = styled.div`
     flex: 1;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content:center;


`
const ProductAmountContainer = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 20px;

`
const  ProductAmount = styled.div `
   font-size:24px;
   margin: 5px;

`

const ProductPrice = styled.div`
   font-size: 30px;
   font-weight: 200;

`
const Hr = styled.hr`
   background-color:  lightgray;
   border: none;
   height: 1px;

`


const Bottom = styled.div`
   display: flex;
   justify-content: space-between;
`
const Info = styled.div`
  flex: 3;
`
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
   border-radius:10px;
   padding:20px;
   height: 50vh;


   
`
const SummaryTitle = styled.h1 `
   font-weight: 200;

`
const SummaryItem = styled.div`
   margin: 30px 0px;
   display: flex;
   justify-content: space-between;
   font-weight: ${props => props.type === "total" && "500"};
   font-size: ${props => props.type === "total" && "24px"};

`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const Button = styled.button`
   width: 100%;
   padding: 10px;
   background-color: black;
   color: white;
   font-weight: 600;
   
`


const Cart = () => {
  return (
    <Container> 
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>
                YOUR BAG
             </Title> 
             <Top>
                 <TopButton>CONTINUE  SHOPPING</TopButton>
                 <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your wishList(0)</TopText>
                 </TopTexts>
                 <TopButton type="filled">CHECK OUT NOW</TopButton>
             </Top>
             <Bottom>
                 <Info> 
                  <Product>
                     <ProductDetail>
                        <Image src="https://cdn-prodapi.iffcobazar.in/pub/media/catalog/product/i/m/img-20200919-wa0011_1.jpg"/>
                     <Details>
                        <ProductName><b>Product:</b> SAGARIKA</ProductName>
                        <ProductId><b>ID:</b> 12376544876</ProductId>
                         
                     </Details>
                     
                     </ProductDetail>
                     <PriceDetail> 
                        <ProductAmountContainer>
                           <Add/>
                           <ProductAmount>1</ProductAmount>
                           <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>Rs 587</ProductPrice>
                     </PriceDetail>
                  </Product>
                  <Hr/>
                  <Product>
                     <ProductDetail>
                        <Image src="https://cdn-prodapi.iffcobazar.in/pub/media/catalog/product/b/o/boron_fertiliser_20_b_1kg-f-removebg-preview_2.png"/>
                     <Details>
                        <ProductName><b>Product:</b> Boron Fertilizer</ProductName>
                        <ProductId><b>ID:</b> 123767553896</ProductId>
                         
                     </Details>
                     
                     </ProductDetail>
                     <PriceDetail> 
                        <ProductAmountContainer>
                           <Add/>
                           <ProductAmount>2</ProductAmount>
                           <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>Rs 5100</ProductPrice>
                     </PriceDetail>
                  </Product>
                 </Info>
                 <Summary> 
                  <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                  <SummaryItem>
                     <SummaryItemText>Subtotal</SummaryItemText>
                     <SummaryItemPrice>Rs 5687</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                     <SummaryItemText>Estimated Shipping</SummaryItemText>
                     <SummaryItemPrice>Rs 100</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                     <SummaryItemText>Shipping Discount</SummaryItemText>
                     <SummaryItemPrice>Rs -100</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem type="Total">
                     <SummaryItemText>Total</SummaryItemText>
                     <SummaryItemPrice>Rs 5687</SummaryItemPrice>
                  </SummaryItem>
                     <Button>CHECKOUT NOW</Button>
                 </Summary>
             </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart