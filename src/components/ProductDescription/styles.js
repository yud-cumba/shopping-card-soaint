import styled from 'styled-components'

export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  border-radius: 10px;
  overflow: hidden;
  object-fit: contain;
  height: 50%;
  width: 50%;
  @media only screen and (max-width: 600px){
    width: 100%;
    margin-top: 70px;
    margin-bottom: 20px;
  }
`
export const Div = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  @media only screen and (max-width: 600px){
    flex-direction: column;
  }
`
export const Title = styled.h1`
font-size: 25px;
text-align: center;
margin-bottom: 30px;
@media only screen and (max-width: 600px){
    font-size: 20px;
  }
`
export const Description = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
  @media only screen and (max-width: 600px){
    font-size: 15px;
  }
`

export const Category = styled.p`
  background-color: aliceblue;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 18px;
  margin-top: 10px;
  max-width: 150px;
  text-align: center;
`

export const CardDescription = styled.article`
  padding: 50px;
  width: 50%;
  @media only screen and (max-width: 600px){
    padding: 0px;
    width: 100%;
  }
`
export const Actions = styled.div`
  padding: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 600px){
    padding: 5px;
    width: 100%;
  }
`