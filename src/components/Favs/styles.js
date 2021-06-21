import styled from 'styled-components'

import { Link as LinkRouter } from '@reach/router'

export const Tooltip = styled.div`
  width: 300px;
  height: auto;
  background-color: white;
  position: absolute;
  top: 70px;
  right: 10px;
  border-radius: 5px;
  padding: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:before{
    border: 25px solid white;
    content: '';
    border-left-color: transparent;
    border-top-color: transparent;
    border-right-color: transparent;
    position: absolute;
    //top: -20px;
    top: -50px;
    right: 15px;
  }
`;
export const Div = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
  border-bottom: 2px solid black;
`;
export const Img= styled.img`
  margin-right: 10px;
  width: 40px;
`;
export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: 100%;
  color: black;
  padding-top: 5px;
`
export const MyFavs = styled.div`
  padding: 8px;
  border-radius: 5px;
  border:0.5px solid #000000;
  display: flex;
  width: 150px;
  cursor:pointer;
  @media only screen and (max-width: 600px){
    padding: 5px;
    text-align: center;
  }
`