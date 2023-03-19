import { Add , Remove} from "@mui/icons-material"
import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import NewsLetter from "../Components/NewsLetter"

const Container= styled.div`
    
`
const Wrapper= styled.div`
   padding:50px;
   display:flex;

`
const ImgContainer= styled.div`
    flex:1;
`
const Image= styled.img`
    width:100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer= styled.div`
    flex:1;
    padding: 0px 50px;
`
const Title= styled.h1`
    font-weight: 600;
    font-size: 40px;
     

`
const Desc= styled.p`
font-weight: 300;
    margin: 20px 0px;
`
const Price= styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
  width : 50% ;
  margin: 30px 0px;
 display: flex;
 justify-content: space-between;
`
const Filter = styled.div`    
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`    
    font-size: 20px;
    font-weight: 200;
`
/* const FilterColor = styled.div`    
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props => props.color};
` */
const FilterSize = styled.select`    
   margin-left: 10px;
   padding:5px;

`
const FilterSizeOption = styled.option`    

`
const AddContainer = styled.div`  
   width  :50% ;
   justify-content: space-between;

  display: flex;
  align-items: center;

`
const AmountContainer = styled.div`    
  display: flex;
  align-items: center;
  font-weight: 700;

`
const Amount = styled.span`    
  width: 30px;
  height:30px;
  border-radius: 10px;
  border: 1px  solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;

`
const Button = styled.button`    
  padding: 15px;
  border:2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
    background-color: #bef5be;
  }
`

const Product = () => {
  return (
    <Container> 
        <Navbar/>
        <Announcement/>
        <Wrapper>
           <ImgContainer>
           <Image src="https://cdn-prodapi.iffcobazar.in/pub/media/catalog/product/u/r/urea_18_18_18_1kg-f_2_4.jpg"/>
           </ImgContainer>
           <InfoContainer>
            <Title>Urea</Title>
             <Desc>Agriculture is the art and science of cultivating the soil, growing crops and raising livestock. It includes the preparation of plant and animal products for people to use and their distribution to markets. Agriculture provides most of the world's food and fabrics.</Desc>
             <Price>Rs 399</Price>
             <FilterContainer>
                  
                 <Filter>
                  <FilterSize>
                  <FilterSizeOption>250g</FilterSizeOption>
                  <FilterSizeOption>500g</FilterSizeOption>
                  <FilterSizeOption>1kg</FilterSizeOption>
                  <FilterSizeOption>1.5kg</FilterSizeOption>
                  <FilterSizeOption>2kg</FilterSizeOption>
                  
                  </FilterSize>

                 </Filter>

             </FilterContainer>
             <AddContainer>
                <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                <Add/>
                
                </AmountContainer>
                <Button>ADD TO CART</Button>
             </AddContainer>
           </InfoContainer>
        </Wrapper>
        
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default Product