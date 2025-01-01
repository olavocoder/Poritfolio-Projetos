import React, { useState } from 'react'
import { Flex, Input, Button } from '@chakra-ui/react'
import * as S from './styles'
import { Checkbox } from '../ui/checkbox'
import { SendEmailsPost } from '../../services/wordpress'

const Newsletter = () => {
  const [valid, setValid] = useState(null)
  const [isCheck, setIsCheck] = useState(null)
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState(null)

  function ValidationSendEmail(e) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    regexEmail.test(e.target.value) ? setValid(true) : setValid(false)
    e.target.value === '' && setValid(null)
    setEmail(e.target.value)
    isCheck == null && setIsCheck(false)
  }

  function ValidationCheckBox() {
    isCheck ? setIsCheck(false) : setIsCheck(true)
  }

  async function SendEmail() {
    if (valid && isCheck) {
      try {
        setMsg('Enviando o email...')
        // Send email to database
        await SendEmailsPost(email)
        setMsg('Email enviando com sucesso!')
      } catch (err) {
        setMsg(
          'Falha ao processar operação! Entre em contato com o nosso suporte.'
        )
      }
    }
  }

  return (
    <S.Wrapper>
      <div>
        <h2>Receba noticias todos os dias direto no seu email</h2>
        <form>
          <Flex gap={5}>
            <Input
              onChange={(e) => ValidationSendEmail(e, 'email')}
              placeholder="Digite seu e-mail"
              className={`pl-3 outline-none ${
                valid === true || valid === null
                  ? 'border-white'
                  : 'border-red-500 text-red-500'
              }`}
            />
            <Button onClick={() => SendEmail()} className="px-1">
              Quero assinar
            </Button>
          </Flex>
          <Checkbox
            onChange={() => ValidationCheckBox()}
            className={`news-check mt-3 ${
              isCheck == false && 'notCheck text-red-500'
            }`}
          >
            Voce aceita nossos termos e condições
          </Checkbox>
          {msg && <span className="block text-green-500 pt-3">{msg}</span>}
        </form>
      </div>
    </S.Wrapper>
  )
}

export default Newsletter
