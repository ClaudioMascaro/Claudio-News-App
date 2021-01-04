import React from 'react'
import Button from '../../components/Button'
import { List } from './styles'

interface Props {
  email: Array<string>
}

const MailingList: React.FC<Props> = ({ email }) => {
  
  return (
    <List>
    {email.map(m => (
      <li key={m}>
        <label>
          <input type="checkbox"/>
          {m}
        </label>
        <Button>Apagar</Button>
      </li>
    ))}
    </List>
  )
}
export default MailingList