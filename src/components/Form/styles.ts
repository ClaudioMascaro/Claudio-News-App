import styled, { css } from 'styled-components'

interface FormProps {
  hasError: boolean;
  isTyping: boolean;
}

interface MessageProps {
  hasError: boolean;
}

export const FormStyle = styled.form<FormProps>`
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
      border-radius: 0;
      color: #3a3a3a;
      border: 1px solid #FFF;
    
    ${(props) => (props.hasError && props.isTyping) && css`
      border-color: #FFF;
    `}

    ${(props) => (!props.hasError && !props.isTyping) && css`
      border-color: #73AB84;
    `}

    ${(props) => (!props.hasError && props.isTyping) && css`
      border-color: #FFF;
    `}

    ${(props) => (props.hasError && !props.isTyping) && css`
      border-color: #c53030;
    `}

    &::placeholder{
      color: #a8a8b3;
    }

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