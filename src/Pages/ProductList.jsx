 
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NewsLetter from "../Components/NewsLetter";
import Products from "../Components/Products";


const Container = styled.div`
    
`
const Title = styled.h1`
    margin: 20px;

`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`
const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding:10px;
    margin-right:20px;
    
`
const Option = styled.option`
    
`

const ProductList = () => {
  return (
    <Container> 
         <Navbar/>
         <Announcement/>
         <Title>Fertilizers and Pesticides</Title>
         <FilterContainer>
            <Filter><FilterText>
                Filter Products
                </FilterText>
                 
                <Select>
                    <Option disabled selected>Quantity</Option>
                    <Option>250 g</Option>
                    <Option>500 g</Option>
                    <Option>1 kg</Option>
                    <Option>1.5 kg</Option>
                    <Option>2 kg</Option>
                    <Option>5 kg</Option>
                 
                </Select>
                </Filter>
            <Filter>
                <FilterText>
                Sort Products
                </FilterText>
                <Select>
                    <Option disabled selected>Type</Option>
                    <Option>Fertilisers</Option>
                    <Option>Pesticides</Option>
                    <Option>Fungal</Option>
                     
                </Select>
                </Filter>
         </FilterContainer>
         <Products/>
         <NewsLetter/>
         <Footer/>
    </Container>
  )
}

export default ProductList