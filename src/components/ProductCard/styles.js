import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  width: 75px;
  color: #000000;
  width: 250px;
  height: 300px;
  border: 1px solid #000000 ;
  margin: 10px;
  padding: 15px;
  border-radius: 10px;
`
export const Title = styled.h3`
  font-size: 15px;
  margin: 10px 0;
`
export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const Price = styled.div`
  border-radius: 5px;
  border: 0.5px solid #000000 ;
  padding: 4px;
  margin: 5px;
`

export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  border-radius: 10px;
  height: 150px;
  overflow: hidden;
  object-fit: contain;
  width: 200px;
`
