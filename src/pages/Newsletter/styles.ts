import styled, { css } from 'styled-components'

interface FormProps {
  hasError: boolean;
  hasSucceded: boolean;
}


export const Form = styled.form<FormProps>`
  height: 56px;
  max-width: 700px;
  display: flex;
  width: 100%;
  place-content: center;
  align-items: center;
  margin-top: 20px;

    input {
      padding: 16px;
      width: 100%;
      border: 0;
      border-radius: 10px 0 0 10px;
      color: #3a3a3a;
      border: 1px solid #FFF;
    

    ${(props) => props.hasError && css`
      border-color: #c53030;
    `}

    ${(props) => props.hasSucceded && css`
      border-color: #73AB84;
    `}

    &::placeholder{
      color: #a8a8b3;
    }

  }
`

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  place-content: center;
`

export const Content = styled.div`
margin-bottom: 120px;
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

export const MessageWrapper = styled.div`
  max-width: 700px;
  display: flex;
  width: 100%;
  place-content: start;
  align-items: start;
`

export const Error = styled.span`

display: flex;
color: #C53030;
margin-top: 16px;
font-weight: 500;

`

export const Success = styled.span`

display: flex;
color: #73AB84;
margin-top: 16px;
font-weight: 500;

`
