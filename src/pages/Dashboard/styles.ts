import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  height: auto;
  display: flex;
  align-items: stretch;
  place-content: center;
`

export const Content = styled.div`
padding-top: 150px;
padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  width: 100%;
  max-width: 1550;
  
  h1 {
      margin-bottom: 96px;
    }

  span {
    padding: 16px;
    max-width: 100%;
    justify-content: flex-start;
    place-items: flex-start;
    display: flex;

    input{
      margin-right: 80px;
      padding: 16px;
      width: 100%;
      border: 0;
      border-radius: 10px 10px 10px 10px;
      color: #3a3a3a;
      border: 1px solid #FFF;
    }


    button {
      background-color: transparent;
      border: 0;
      margin: 10px;
      margin-right: 60px;
      align-self: stretch;
      color: #0E1C36;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2,'#4A5568')};
      }
    }
  }
`

export const Pagination = styled.div`

  margin-bottom: 16px;
  display: flex;
  place-content: center;
  align-items: stretch;

  width: 100%;
  max-width: 900px;

`