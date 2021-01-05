import React, { FormHTMLAttributes, useState, FormEvent } from 'react'
import Button from '../../components/Button'
import { FormStyle, MessageWrapper } from './styles'
import api from '../../services/api';
import { schema } from '../../config/validationSchemas'

type FormProps = FormHTMLAttributes<HTMLFormElement>

const Form: React.FC<FormProps> = () => {
  const [email, setEmail] = useState('')
  const [inputError, setInputError] = useState({
    message: '',
    hasError: true,
    isTyping: true
  })

  async function onSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    try {
      await schema.validate({ email }, {
        abortEarly: false,
      })
      const response = await api.post('/newsletter', {email})
      const { message } = response.data
      setEmail(email)
      setInputError({ message, hasError: false, isTyping: false})  

    } catch (err) {
      setEmail('')
      setInputError({ 
        message: err.response? err.response.data : err.message,
        hasError: true,
        isTyping: false
      })
    }
}  

function onInputChange (e: React.ChangeEvent<HTMLInputElement>) {
  setEmail(e.target.value)
  setInputError({ 
    message: '',
    hasError: true,
    isTyping: true
  })
}


return (
  <>
    <FormStyle hasError={inputError.hasError} isTyping={inputError.isTyping} onSubmit={onSubmit}>
      <input value={email} onChange={onInputChange} name="email" placeholder= "E-mail" />
      <Button name="login" type="submit">Inscrever-se</Button>
    </FormStyle>
    <MessageWrapper hasError={inputError.hasError}>
      { inputError && inputError.message }
    </MessageWrapper>
  </>
)}

export default Form