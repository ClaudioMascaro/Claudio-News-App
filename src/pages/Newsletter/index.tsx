import React, { useState, FormEvent } from 'react'
import api from '../../services/api';
import Button from '../../components/Button'
import { schema } from '../../config/validationSchemas'

import { Form, Container, Content, Error, Success, MessageWrapper } from './styles'

const Newsletter: React.FC = () => {

  const [email, setEmail] = useState('') 
  const [inputError, setError] = useState('') 
  const [inputSuccess, setSuccess] = useState('')

  async function handleAddEmail(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    try {
      await schema.validate({email}, {
        abortEarly: false,
      }).then(async () => {
        try{
        const response = await api.post('/newsletter', {email: email})
        const { message } = response.data
        setEmail('')
        setSuccess(message)
        setError('')
        } catch (err) {
          setEmail('')
          setSuccess('')
          setError('E-mail inválido ou já cadastrado!')
        }
      }).catch((err) => {
        setEmail('')
        setSuccess('')
        setError(err.message)
      })
    }
      finally {
      return
    }
  }

  function handleInput (e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
    setError('')
    setSuccess('')
  }

  return (
    <Container>
        <Content>
        <h1>Faça seu cadastro</h1>
          <Form hasError={!!inputError} hasSucceded={!!inputSuccess} onSubmit={handleAddEmail}>
              <input value={email} onChange={handleInput} name="email" placeholder= "E-mail" />
              <Button name="login" type="submit">Inscrever-se</Button>
            </Form>
            <MessageWrapper>
            { inputError && <Error>{inputError}</Error> }
            { inputSuccess && <Success>{inputSuccess}</Success> }
            </MessageWrapper>
        </Content>
    </Container> 
  )
}

export default Newsletter