import styled from 'styled-components'
import { shade } from 'polished'


export const Form = styled.form`
  height: 56px;
  margin-top: 40px;
  max-width: 600px;
  display: flex;
  width: 100%;
  place-content: center;
  align-items: center;

    input {
      padding: 16px;
      width: 100%;
      border: 0;
      border-radius: 10px 0 0 10px;
      color: #3a3a3a;
      border: 0 solid #FFF;
    }


  button {
    background: #907F9F;
    padding: 16px;
      width: 45%;
      border: 0;
      border-radius: 0 0 10px;
      border: 0 solid #FFF;
      color: #312e38;
    font-weight: 500;
    transition: background-color 0.2s;
      &:hover {
        background: ${shade(0.2,'#907F9F')}
      }

  }

`

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  width: 100%;
  max-width: 1400px;
  
  h1 {
      margin-bottom: 24px;
    }

       
`