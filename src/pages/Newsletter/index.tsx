import React from 'react'

import Button from '../../components/Button'

import { Form, Container, Content } from './styles'

const Newsletter: React.FC = () => (
  <Container>
      <Content>
      <h1>Faça seu cadastro</h1>
        <Form >
            <input name="email" placeholder= "E-mail" />
            <Button name="login" type="submit">Inscrever-se</Button>
          </Form>
      </Content>
  </Container> 
)

export default Newsletter