import React from 'react'
import Button from '../../components/Button'
import { List } from './styles'

interface Props {
  email: Array<string>
  error?: string
}

const MailingList: React.FC<Props> = ({ email, error }) => {
  
   if (email.length > 0) return (
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

  return (<List>{error}</List>)

}
export default MailingList