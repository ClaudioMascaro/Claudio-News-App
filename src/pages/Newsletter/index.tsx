import React, { useState, FormEvent } from 'react'

import Button from '../../components/Button'

import { Form, Container, Content } from './styles'

const Newsletter: React.FC = () => {
  
  const [email, setEmail] = useState('') 

  async function handleAddEmail(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    
    if (!email) {
      return
    }

    console.log(email)

  }

  return (
    <Container>
        <Content>
        <h1>Faça seu cadastro</h1>
          <Form onSubmit={handleAddEmail} action="">
              <input value={email} onChange={e => setEmail(e.target.value)} name="email" placeholder= "E-mail" />
              <Button name="login" type="submit">Inscrever-se</Button>
            </Form>
        </Content>
    </Container> 
  )
}

export default Newsletter