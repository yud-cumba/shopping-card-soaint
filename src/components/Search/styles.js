import styled from 'styled-components'

export const Input = styled.input`
  height: 30px;
  width: 400px;
  position: fixed;
  z-index: 10;
  border-radius: 5px;
  padding: 0 5px;
  @media only screen and (max-width: 600px){
      width: 70%;
  }
`

export const Div = styled.div`
margin-top: 60px;
display: flex;
justify-content: center;
position: fixed;
width: 100%;
height: 40px;
padding: 5px;
background-color: green;
`