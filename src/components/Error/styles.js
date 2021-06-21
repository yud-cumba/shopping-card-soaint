import styled from 'styled-components'
import img from '../../assets/img/icon-errores.png'

export const Page= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  text-align: center;
`
export const NoData = styled.div`
background-position: 0 103%;
background-image: url(${img});
  background-size: 100%;
  width: 200px;
  height: 200px;
`
export const ErrorImg = styled.div`
background-position: 0 0;
background-image: url(${img});
  background-size: 100%;
  width: 200px;
  height: 200px;
`