import React from 'react';
import { toast } from 'react-toastify';

// Styles
import { Container, BoxLogin, Input, Button } from './styles';

// Logo
import Logo from '../../assets/images/logo.png';

// Services
import logar from '../../services/logar';

export default function Login() {
  async function onSubmit(e) {
    e.preventDefault();

    const { email, senha } = e.target.elements;

    if (!email.value || !senha.value) {
      return toast.error('Preencha todos os campos', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    const entrar = await logar(email.value, senha.value);

    if (entrar.status !== 200) {
      return toast.error(entrar.data, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    toast.success('Login efetuado com sucesso!', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    localStorage.setItem('adm', JSON.stringify(entrar.data));

    setTimeout(() => {
      window.location.href = `/dashboard`;
    }, 1000);
  }
  return (
    <Container>
      <BoxLogin>
        <img src={Logo} alt="Cursos Beta" className="logo" />
        <h2>Acesse o painel</h2>
        <form onSubmit={onSubmit}>
          <div className="input-group">
            <Input type="text" name="email" placeholder="Digite seu e-mail" />
          </div>
          <div className="input-group">
            <Input
              type="password"
              name="senha"
              placeholder="Digite sua senha"
            />
          </div>
          <Button type="submit">Entrar</Button>
        </form>
      </BoxLogin>
    </Container>
  );
}
