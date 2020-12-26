import React, { useState, FormEvent } from 'react'
import api from '../../services/api';
import Button from '../../components/Button'
import { schema } from '../../config/validationSchemas'

import { Form, Container, Content, MessageWrapper } from './styles'

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('')
  const [inputError, setInputError] = useState({
  message: '',
  status: true,
  ref: true})

  async function onSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    try {
      await schema.validate({ email }, {
        abortEarly: false,
      })
      const response = await api.post('/newsletter', {email})
      const { message } = response.data
      setEmail(email)
      setInputError({ message, status: false, ref: false})  

      } catch (err) {
      setEmail('')
      setInputError({ message: err.response? err.response.data : err.message,
        status: true, ref: false})
      }
}  

  function onInputChange (e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
    setInputError({message: '',
    status: true,
    ref: true})
  }

  return (
    <Container>
        <Content>
        <h1>Faça seu cadastro</h1>
          <Form hasError={!!inputError.status} errorRef={!!inputError.ref} onSubmit={onSubmit}>
              <input value={email} onChange={onInputChange} name="email" placeholder= "E-mail" />
              <Button name="login" type="submit">Inscrever-se</Button>
            </Form>
            <MessageWrapper hasError={!!inputError.status}>
            { inputError && inputError.message }
            </MessageWrapper>
        </Content>
    </Container> 
  )
}

export default Newsletter