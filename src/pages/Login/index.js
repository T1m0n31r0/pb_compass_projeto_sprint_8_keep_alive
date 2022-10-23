import React from "react";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { getAuth } from "firebase/auth";
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
  Navegar,
} from "./styles";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseApp } from "../Cadastro";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [focusUser, setFocusUser] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [noValidated, setNoValidated] = useState(false);
  const navigate = useNavigate();

  const formValidation = (event) => {
    event.preventDefault();
    const auth = getAuth(FirebaseApp);

    signInWithEmailAndPassword(auth, user, password)
      .then(() => {
        navigate("/home");
        setNoValidated(false);
      })
      .catch(() => {
        setNoValidated(true);
      });
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
            <Navegar>
              Não possui cadastro?{" "}
              <Link to="/cadastro">&nbsp;Clique aqui!</Link>
            </Navegar>
          </LoginForm>
        </ContentLeft>
      </ContainerLeft>
      <ContainerRight />
    </MainContainer>
  );
}

export default Login;
