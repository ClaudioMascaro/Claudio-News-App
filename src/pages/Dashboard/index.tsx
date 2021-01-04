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
  const [nextPage, setNextPage] = useState()
  const [previousPage, setPreviousPage] = useState()
  const [loading, setLoading] = useState(true)
  const [currentPageUrl, setCurrentPageUrl] = useState(`/newsletter?page=
  ${1}&limit=${10}`)

  useEffect(() => {
    setLoading(true)
    api.get(currentPageUrl).then(res => {
      setLoading(false)
      const { results } = res.data
      setNextPage(res.data.next? res.data.next : false)
      setPreviousPage(res.data.previous? res.data.previous : false)
      setEmail(results.map((mailing: Mailing) => mailing.email))
    })
  }, [currentPageUrl])

  if (loading) return (
    <>
      <Container>
        <Content>
          Carregando...
        </Content>
      </Container>
    </> 
  )

  function gotoNextPage () {
    setCurrentPageUrl(`/newsletter?page=${nextPage}&limit=${10}`)
  }

  function gotoPreviousPage () {
    setCurrentPageUrl(`/newsletter?page=${previousPage}&limit=${10}`)
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
          <MailingList email={email} />
          <Pagination
          gotoNextPage={nextPage? gotoNextPage : undefined}
          gotoPreviousPage={previousPage? gotoPreviousPage : undefined}
          />
        </Content>
      </Container>
    </>
  )
} 

export default Dashboard