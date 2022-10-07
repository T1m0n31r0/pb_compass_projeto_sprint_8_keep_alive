import React from "react";
import { BsCheck2, BsCheck2All } from "react-icons/ai";
import {
  MainContainer,
  ContainerLeft,
  ContentLeft,
  ContentText,
  ContentTextH1,
  ContentTextP,
  CadastroForm,
  CadastroFormH1,
  Input,
  InputNome,
  InputSobrenome,
  InputEmail,
  InputPassword,
  ChecklistPassword,
  Icone,
  InputConfirmPassword,
  CadastroFormButton,
  ContainerRight,
  Erro,
} from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cadastro() {
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
              Para acessar a rede de forma <br /> segura, efetue seu cadastro.
            </ContentTextP>
          </ContentText>
          <CadastroForm>
            <CadastroFormH1>Cadastro</CadastroFormH1>
            <InputNome>
              <Input type="text" placeholder="Insira aqui seu primeiro nome" />
            </InputNome>
            <InputSobrenome>
              <Input type="text" placeholder="Insira aqui seu sobrenome" />
            </InputSobrenome>
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
                placeholder="Insira aqui seu e-mail"
                noValidated={noValidated}
                required
                onFocus={() => setFocusUser(true)}
              />
              {/* <Icone selected={user} focus={focusUser}>
                <AiOutlineUser size={25} />
              </Icone> */}
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
                placeholder="Crie uma senha válida"
                noValidated={noValidated}
                required
                onFocus={() => setFocusPassword(true)}
              />
              {/* <Icone selected={password} focus={focusPassword}>
                <AiOutlineLock size={25} />
              </Icone> */}
            </InputPassword>

            <ChecklistPassword>
              <ul>
                <li>6 caracteres</li>
                <li>caratere especial</li>
                <li>número</li>
                <li>letra maiúscula</li>
                <li>letra minúscula</li>
              </ul>
            </ChecklistPassword>

            {noValidated ? (
              <Erro>Ops, usuário ou senha inválidos. Tente novamente!</Erro>
            ) : (
              ""
            )}

            <InputConfirmPassword>
              <Input
                type="password"
                placeholder="Repita a senha que você criou acima"
              />
            </InputConfirmPassword>

            <CadastroFormButton onClick={formValidation}>
              Cadastrar
            </CadastroFormButton>
            <p>
              <a>Se você já possui cadastro clique aqui</a>
            </p>
          </CadastroForm>
        </ContentLeft>
      </ContainerLeft>
      <ContainerRight />
    </MainContainer>
  );
}

export default Cadastro;
