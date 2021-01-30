import React, { useState, useEffect, ChangeEvent } from 'react'
import MailingList from '../../components/MailingList'
import { Container, Content } from './styles'
import { SortByAlpha, DateRange } from '@material-ui/icons'
import api from '../../services/api';
import Pagination from '../../components/Pagination'
import { withRouter } from 'react-router-dom'

interface Mailing {
  _id: string
  email: string
  createdAt: Date
}

const Dashboard: React.FC = () => {

  const [reload, setReload] = useState(false)
  const [email, setEmail] = useState([])

  const [sortResults, setSortResults] = useState({
    sortby: 'createdAt',
    order: -1
  })

  const [currentUrl, setCurrentUrl] = useState(
    `/newsletter?page=${1}&limit=${10}&sortby=${sortResults.sortby}&order=${sortResults.order}`
    )

  const [pagination, setPagination] = useState({
    previous: null,
    next: 2
  })

  const [emails, setEmails] = useState([] as any)

  function onChangeBox (m: string) {
      
    if (!emails.includes(m)) {
      setEmails((currentEmails: Array<string>) => [...currentEmails, m])
    }
    else {
      setEmails(() => emails.filter((item: string) => item !== m))
    }
  
  }


  const [error, setError] = useState('')

  useEffect(() => {

    api.get(currentUrl).then(res => {
      const { results } = res.data
      setPagination({
        previous: res.data.previous || false,
        next: res.data.next || false,
      })
      setEmail(results.map((mailing: Mailing) => mailing.email))
    }).catch((err) => {
      console.log(err)
      setError('Erro ao carregar informações')

    })
  }, [currentUrl, reload])

  function gotoNextPage () {
    setPagination({
      previous: pagination.previous,
      next: pagination.next
    })
    setCurrentUrl(
    `/newsletter?page=${pagination.next}&limit=${10}&sortby=${sortResults.sortby}&order=${sortResults.order}`
    )
  }

  function gotoPreviousPage () {
    setPagination({
      previous: pagination.previous,
      next: pagination.next
    })
    setCurrentUrl(
    `/newsletter?page=${pagination.previous}&limit=${10}&sortby=${sortResults.sortby}&order=${sortResults.order}`
    )
  }

  function sortByAlpha () {

    if (sortResults.order < 0) {
      setSortResults({
        sortby: 'email',
        order: 1
      })
    }

    else {
      setSortResults({
        sortby: 'email',
        order: -1
      })
    }

    setCurrentUrl(
    `/newsletter?page=${1}&limit=${10}&sortby=${'email'}&order=${sortResults.order <0? 1: -1}`
    )
  }

  function sortByDate () {

    if (sortResults.order < 0) {
      setSortResults({
        sortby: 'createdAt',
        order: 1
      })
    }

    else {
      setSortResults({
        sortby: 'createdAt',
        order: -1
      })
    }

    setCurrentUrl(
    `/newsletter?page=${1}&limit=${10}&sortby=${'createdAt'}&order=${sortResults.order >0? -1: 1}`
    )
  }

  function onChangeSearch (event: ChangeEvent<HTMLInputElement>) {

    if (event.currentTarget.value !== '') {
      setCurrentUrl(`/newsletter?search=${event.currentTarget.value}`)
    }
    else { 
      setCurrentUrl(
        `/newsletter?page=${1}&limit=${10}&sortby=${sortResults.sortby}&order=${sortResults.order}`
      )
    }
  }
  
  function onClickDelete (m: string) {
    api.delete(`/newsletter/${m}`).then(() =>{
      setReload(reload === true? false: true)
    })
  }

  function onClickMultipleDelete () {
    emails.forEach((email: string) => onClickDelete(email))
  }

  return (
    <>
      <Container>
        <Content>
          <h1>Lista de e-mails cadastrados</h1>
          <span>
            <button onClick={onClickMultipleDelete}>Apagar selecionados</button>
            <input onChange={onChangeSearch} type='text' placeholder="Buscar..."/>
            <button onClick={sortByAlpha}><SortByAlpha /></button>
            <button onClick={sortByDate}><DateRange /></button>
          </span>
          <MailingList 
          email={email}
          error={error}
          onClickDelete={onClickDelete}
          onChangeBox={onChangeBox} />
          <Pagination
          gotoNextPage={pagination.next? gotoNextPage : undefined}
          gotoPreviousPage={pagination.previous? gotoPreviousPage : undefined}
          />
        </Content>
      </Container>
    </>
  )
} 

export default withRouter(Dashboard)