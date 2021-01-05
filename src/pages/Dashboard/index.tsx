import React, { useState, useEffect } from 'react'
import MailingList from '../../components/MailingList'
import { Container, Content } from './styles'
import { SortByAlpha, DateRange } from '@material-ui/icons'
import api from '../../services/api';
import Pagination from '../../components/Pagination'

interface Mailing {
  _id: string
  email: string
  createdAt: Date
}

const Dashboard: React.FC = () => {

  const [email, setEmail] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState({
    current: `/newsletter?page=
    ${1}&limit=${10}`,
    previous: null,
    next: 2,
  })
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    api.get(page.current).then(res => {
      setLoading(false)
      const { results } = res.data
      setPage({
        current: page.current,
        previous: res.data.previous || false,
        next: res.data.next || false
      })
      setEmail(results.map((mailing: Mailing) => mailing.email))
    }).catch((err) => {
      console.log(err)
      setError('Erro ao carregar informações')
      setLoading(false)
    })
  }, [page.current])


  if (loading) return (
    <>
      <Container>
        <Content>
        <MailingList email={email} />
          Carregando...
        </Content>
      </Container>
    </> 
  )

  function gotoNextPage () {
    setPage({
      current: `/newsletter?page=${page.next}&limit=${10}`,
      previous: page.previous,
      next: page.next
    })
  }

  function gotoPreviousPage () {
    setPage({
      current: `/newsletter?page=${page.previous}&limit=${10}`,
      previous: page.previous,
      next: page.next
    })
  }
  
  return (
    <>
      <Container>
        <Content>
          <h1>Lista de e-mails cadastrados</h1>
          <span>
            <button>Apagar selecionados</button>
            <input type='text' placeholder="Buscar..."/>
            <button><SortByAlpha /></button>
            <button><DateRange /></button>
          </span>
          <MailingList 
          email={email}
          error={error} />
          <Pagination
          gotoNextPage={page.next? gotoNextPage : undefined}
          gotoPreviousPage={page.previous? gotoPreviousPage : undefined}
          />
        </Content>
      </Container>
    </>
  )
} 

export default Dashboard