import styled from 'styled-components'

import { Link as LinkRouter } from '@reach/router'

export const Tooltip = styled.div`
  width: 300px;
  height: auto;
  background-color: white;
  position: absolute;
  top: 50px;
  right: 10px;
  border-radius: 5px;
  padding: 8px;
  border: 1px solid black;
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
`