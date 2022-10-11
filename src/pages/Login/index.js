import React from "react";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import {
  MainContainer,
  ContainerLeft,
  ContentLeft,
  ContentText,
  ContentTextH1,
  ContentTextP,
  LoginForm,
  LoginFormH1,
  Input,
  InputEmail,
  InputPassword,
  LoginFormButton,
  ContainerRight,
  Erro,
  Icone,
} from "./styles";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [focusUser, setFocusUser] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [noValidated, setNoValidated] = useState(false);
  const navigate = useNavigate();

  const formValidation = (event) => {
    event.preventDefault();

    let regEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

    if (regEmail.test(user) && password.length > 5) {
      navigate("/home");
      setNoValidated(false);
    } else return setNoValidated(true);
  };
  return (
    <MainContainer>
      <ContainerLeft>
        <ContentLeft>
          <ContentText>
            <ContentTextH1>Olá,</ContentTextH1>
            <ContentTextP>
              Para continuar navegando de forma <br /> segura, efetue o login na
              rede.
            </ContentTextP>
          </ContentText>
          <LoginForm>
            <LoginFormH1>Login</LoginFormH1>
            <InputEmail>
              <Input
                onBlur={(event) =>
                  event.target.value.length > 0
                    ? setFocusUser(true)
                    : setFocusUser(false)
                }
                onChange={(event) => setUser(event.target.value)}
                value={user}
                type="text"
                placeholder="E-mail"
                noValidated={noValidated}
                required
                onFocus={() => setFocusUser(true)}
              />
              <Icone selected={user} focus={focusUser}>
                <AiOutlineUser size={25} />
              </Icone>
            </InputEmail>
            <InputPassword>
              <Input
                onBlur={(event) =>
                  event.target.value.length > 0
                    ? setFocusPassword(true)
                    : setFocusPassword(false)
                }
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                type="password"
                placeholder="Senha"
                noValidated={noValidated}
                required
                onFocus={() => setFocusPassword(true)}
              />
              <Icone selected={password} focus={focusPassword}>
                <AiOutlineLock size={25} />
              </Icone>
            </InputPassword>

            {noValidated ? (
              <Erro>Ops, usuário ou senha inválidos. Tente novamente!</Erro>
            ) : (
              ""
            )}

            <LoginFormButton onClick={formValidation}>
              Continuar
            </LoginFormButton>
            <br />
            <Link to="/cadastro">&nbsp;Não possui cadastro? Clique aqui!</Link>
          </LoginForm>
        </ContentLeft>
      </ContainerLeft>
      <ContainerRight />
    </MainContainer>
  );
}

export default Login;
