import styled from "styled-components"

const Container= styled.div`
    height: 30px;
    background-color: lightgreen;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

 

const Announcement = () => {
  return (
    <Container> 
          Get First Soil Testing Free...
    </Container>
  )
}

export default Announcement