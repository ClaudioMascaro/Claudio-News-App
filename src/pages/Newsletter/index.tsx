import React, { useState, FormEvent } from 'react'
import api from '../../services/api';
import Button from '../../components/Button'

import { Form, Container, Content, Error, Success } from './styles'

const Newsletter: React.FC = () => {

  const [email, setEmail] = useState('') 
  const [inputError, setError] = useState('') 
  const [inputSuccess, setSuccess] = useState('')

  async function handleAddEmail(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
  
    if (!email) {
      setEmail('')
      setSuccess('')
      setError('Insira um endereço de email.')
      return
    }

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
            { inputError && <Error>{inputError}</Error> }

{ inputSuccess && <Success>{inputSuccess}</Success> }
        </Content>
    </Container> 
  )
}

export default Newsletter