import React from 'react'

//import Input from '../../components/Input'
//import Button from '../../components/Button'

import { Form, Container, Content } from './styles'

const Newsletter: React.FC = () => {


  return (
  <Container>
      <Content>
      <h1>Faça seu cadastro</h1>
        <Form >
            <input name="email" placeholder= "E-mail" />
            <button name="login" type="submit">Inscrever-se</button>
          </Form>

      </Content>

  </Container> 

)}

export default Newsletter