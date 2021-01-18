import styled, { css } from 'styled-components'

interface MessageProps {
  hasError: boolean;
}

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

export const MessageWrapper = styled.div<MessageProps>`
  max-width: 700px;
  display: flex;
  width: 100%;
  place-content: start;
  align-items: start;
  margin-top: 16px;
  font-weight: 500;

  ${(props) => props.hasError && css`
      color: #c53030;
    `}

  ${(props) => !props.hasError && css`
      color: #73AB84;
    `}

`