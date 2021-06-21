import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
export const Nav = styled.nav`
  align-items: center;
  background: #A029FD;
  display: flex;
  height: 60px;
  justify-content: space-between;
  width: 100vw;
  position: fixed;
  z-index: 1000;
  padding: 10px;
`
export const Logo = styled.img`
  padding: 10px;
  height: 50px;
  @media only screen and (max-width: 600px){
    padding: 5px;
    height: 30px;
  }
`
export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  text-decoration: none;
  width: 100%;

  &[aria-current] {
    color: #000;
  }
`