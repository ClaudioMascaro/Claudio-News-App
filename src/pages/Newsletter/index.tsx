import React, { useState, FormEvent } from 'react'
import api from '../../services/api';
import Button from '../../components/Button'
import { schema } from '../../config/validationSchemas'

import { Form, Container, Content, Error, Success, MessageWrapper } from './styles'

const Newsletter: React.FC = () => {

  const [state, setState] = useState({ email: '',
  inputError: '',
  inputSuccess: ''})

  async function onSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    try {
      const email = state.email
      await schema.validate({ email }, {
        abortEarly: false,
      })
      const response = await api.post('/newsletter', {email})
      const { message } = response.data
      setState({ email: '',
        inputError: '',
        inputSuccess: message})
      } catch (err) {
      setState({ email: '', 
      inputError: (err.response? err.response.data : err.message), 
      inputSuccess: ''})
      } 
  }

  function onInputChange (e: React.ChangeEvent<HTMLInputElement>) {
    setState({ email: e.target.value, inputError: '', inputSuccess: ''})
  }

  return (
    <Container>
        <Content>
        <h1>Faça seu cadastro</h1>
          <Form hasError={!!state.inputError} hasSucceded={!!state.inputSuccess} onSubmit={onSubmit}>
              <input value={state.email} onChange={onInputChange} name="email" placeholder= "E-mail" />
              <Button name="login" type="submit">Inscrever-se</Button>
            </Form>
            <MessageWrapper>
            { state.inputError && <Error>{state.inputError}</Error> }
            { state.inputSuccess && <Success>{state.inputSuccess}</Success> }
            </MessageWrapper>
        </Content>
    </Container> 
  )
}

export default Newsletter