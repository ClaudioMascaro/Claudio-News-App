import React from 'react'


import { Form, Container, Content } from './styles'

const Newsletter: React.FC = () => (
  <Container>
      <Content>
      <h1>Faça seu cadastro</h1>
        <Form >
            <input name="email" placeholder= "E-mail" />
            <button name="login" type="submit">Inscrever-se</button>
          </Form>
      </Content>
  </Container> 
)

export default Newsletter