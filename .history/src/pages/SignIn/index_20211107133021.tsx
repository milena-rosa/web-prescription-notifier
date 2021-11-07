import React from 'react'

import logo from '../../assets/logo.png'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useForm } from '../../hooks/useForm'
import { Container } from './styles'

interface SignInFormValues {
  user: string
  password: string
}

export const SignIn: React.FC = () => {
  const {
    data: { user, password },
    handleChange,
    errors
  } = useForm<SignInFormValues>({
    initialValues: { user: '', password: '' },
    onSubmit: (event) => console.log(event),
    validations: {
      user: { required: { value: true, message: 'Preencha o campo obrigatório.' } },
      password: { required: { value: true, message: 'Preencha o campo obrigatório.' } }
    }
  })

  return (
    <Container>
      <header>Software de Cadastro de Notificadores de Receituários</header>
      <div>
        <Input
          name="user"
          label="Usuário"
          type="text"
          placeholder="Digite seu usuário"
          value={user}
          onChange={handleChange('user')}
          errors={errors.user}
          containerStyle={{ marginBottom: '1.875rem', width: '18.3425rem' }}
        />
        <Input
          name="password"
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={handleChange('password')}
          errors={errors.password}
          containerStyle={{ marginBottom: '1.875rem' }}
        />
        <Button>Entrar</Button>
      </div>
      <footer>
        <img src={logo} alt="Vigilância Sanitária" />
      </footer>
    </Container>
  )
}
