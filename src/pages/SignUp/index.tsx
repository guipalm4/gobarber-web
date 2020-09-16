import React from 'react';
import { FiArrowLeft, FiLock, FiUser, FiMail } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <form>
        <img src={logoImg} alt="GoBarber" />
        <h1>Realize seu cadastro</h1>
        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">Cadastrar</Button>
      </form>
      <a href="login">
        <FiArrowLeft />
        Voltar para o logon
      </a>
    </Content>
  </Container>
);

export default SignIn;
