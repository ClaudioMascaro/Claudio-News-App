import React from 'react'
import Form from '../../components/Form'

import { Container, Content } from './styles'
import { withRouter } from 'react-router-dom'

const Newsletter: React.FC = () => {

  return (
    <Container>
        <Content>
        <h1>Faça seu cadastro</h1>
         <Form />
        </Content>
    </Container> 
  )
}

export default withRouter(Newsletter)