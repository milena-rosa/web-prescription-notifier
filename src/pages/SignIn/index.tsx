import React from 'react'

import logo from '../../assets/logo.png'
import { Button } from '../../components/Button'
import { SignInInput } from '../../components/SignInInput'
import { useForm } from '../../hooks/useForm'
import { Container } from './styles'
import { useAuth } from '../../hooks/useAuth'

interface SignInFormValues {
  user: string
  password: string
}

export const SignIn: React.FC = () => {
  const { signIn } = useAuth()

  const handleSignIn = async () => {
    try {
      await signIn({ email: user, password })
    } catch (error) {
      console.error(error)
    }
  }

  const {
    data: { user, password },
    handleChange,
    handleSubmit,
    errors
  } = useForm<SignInFormValues>({
    initialValues: { user: '', password: '' },
    onSubmit: handleSignIn,
    validations: {
      user: { required: { value: true, message: 'Preencha o campo obrigatório.' } },
      password: { required: { value: true, message: 'Preencha o campo obrigatório.' } }
    }
  })

  return (
    <Container>
      <header>Software de Cadastro de Notificadores de Receituários</header>
      <form onSubmit={handleSubmit}>
        <SignInInput
          name="user"
          label="Usuário"
          type="text"
          placeholder="Digite seu usuário"
          value={user}
          onChange={handleChange('user')}
          errors={errors.user}
          containerStyle={{ width: '18.3425rem' }}
        />
        <SignInInput
          name="password"
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={handleChange('password')}
          errors={errors.password}
          containerStyle={{ width: '18.3425rem' }}
        />
        <Button type="submit">Entrar</Button>
      </form>
      <footer>
        <img src={logo} alt="Vigilância Sanitária" />
      </footer>
    </Container>
  )
}
