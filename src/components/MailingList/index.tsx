import React, { useState } from 'react'
import Button from '../../components/Button'
import { List } from './styles'


interface Props {
  email: Array<string>
  error?: string
  onClickDelete: (m: string) => void
  onChangeBox: (m: string) => void
}

const MailingList: React.FC<Props> = ({ email, error, onClickDelete, onChangeBox }) => {

   if (email.length > 0) return (
    <List>
    {email.map(m => (
      <li key={m}>
        <label>
          <input onChange={() => onChangeBox(m)} type="checkbox"/>
          {m}
        </label>
        <Button onClick={() => onClickDelete(m)}>Apagar</Button>
      </li>
    ))}
    </List>
  )

  return (<List>{error}</List>)

}
export default MailingList