import React from 'react'
import Button from '../Button'
import { Container } from './styles'


interface Props {
  gotoNextPage?: () => void
  gotoPreviousPage?: () => void
}


const Pagination: React.FC<Props> = ({ gotoNextPage, gotoPreviousPage }) => {
  return (
    <Container>
      { gotoPreviousPage && <Button onClick={gotoPreviousPage}>Voltar</Button> }
      { gotoNextPage && <Button onClick={gotoNextPage}>Avançar</Button> }
    </Container>
  )
}

export default Pagination
