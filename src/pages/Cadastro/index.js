import React from "react";
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
  InputConfirmPassword,
  UnacceptedPassword,
  CadastroFormButton,
  ContainerRight,
  AlertError,
  Navegar,
} from "./styles";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../../utils/regex";

function Cadastro() {
  // Estado das variáveis: firstName, lastName, email, password e confirmPassword
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [firstNameErro, setFirstNameErro] = useState(false);
  const [lastNameErro, setLastNameErro] = useState(false);
  const [emailErro, setEmailErro] = useState(false);
  const [passwordErro, setPasswordErro] = useState(false);
  const [confirmPasswordErro, setConfirmPasswordErro] = useState(false);

  const [passwordRequirement, setPasswordRequirement] = useState({
    count: false,
  });

  const func = (passwordText) => {
    if (passwordText.length > 5) {
      setPasswordRequirement({
        ...passwordRequirement,
        count: true,
      });
    }
  };

  const [noValidated, setNoValidated] = useState(false);

  const navigate = useNavigate();

  const validate = (event) => {
    event.preventDefault();

    // Validação do nome
    if (firstName.length < 2) {
      setFirstNameErro(true);
    } else {
      setFirstNameErro(false);
    }

    // Validação do sobrenome
    if (lastName.length < 2) {
      setLastNameErro(true);
    } else {
      setLastNameErro(false);
    }

    // Validação do e-mail
    if (!validateEmail.test(email)) {
      setEmailErro(true);
    } else {
      setEmailErro(false);
    }

    // Validação da senha
    if (!validatePassword.test(password)) {
      setPasswordErro(true);
    } else {
      setPasswordErro(false);
    }

    // Confirmação da senha
    if (confirmPassword !== password) {
      setConfirmPasswordErro(true);
    } else {
      setConfirmPasswordErro(false);
    }
    if (
      !firstNameErro &&
      !lastNameErro &&
      !emailErro &&
      !passwordErro &&
      !confirmPasswordErro
    ) {
      navigate("/");
      setNoValidated(false);
    } else return setNoValidated(true);
  };

  return (
    // Div principal da página
    <MainContainer>
      {/* Div da metade esquerda da página */}
      <ContainerLeft>
        {/* Div pai do conteúdo à esquerda da página */}
        <ContentLeft>
          {/* Div contendo o título e o parágrafo de apresentação do formulário */}
          <ContentText>
            {/* Título de apresentação do formulário */}
            <ContentTextH1>Olá,</ContentTextH1>
            {/* Parágrafo de apresentação do formulário */}
            <ContentTextP>
              Para acessar a rede de forma <br /> segura, efetue seu cadastro.
            </ContentTextP>
          </ContentText>
          {/* Formulário de cadastro de usuário */}
          <CadastroForm>
            {/* Título do formulário */}
            <CadastroFormH1>Cadastro</CadastroFormH1>

            {/* Div do cadastro de nome */}
            <InputNome>
              Nome
              {/* Campo de cadastro de nome */}
              <Input
                type="text"
                placeholder="Insira aqui seu primeiro nome"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                noValidated={noValidated}
              />
              {/* Alerta de erro caso o nome não atenda os requisitos de validação */}
              {firstNameErro && (
                <AlertError>
                  O nome deve conter pelo menos 2 caracteres!
                </AlertError>
              )}
            </InputNome>

            {/* Div do cadastro de sobrenome */}
            <InputSobrenome>
              Sobrenome
              {/* Campo de cadastro de sobrenome */}
              <Input
                type="text"
                placeholder="Insira aqui seu sobrenome"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                noValidated={noValidated}
              />
              {/* Alerta de erro caso o sobrenome não atenda os requisitos de validação */}
              {lastNameErro && (
                <AlertError>
                  O sobrenome deve conter pelo menos 2 caracteres!
                </AlertError>
              )}
            </InputSobrenome>

            {/* Div do cadastro de e-mail */}
            <InputEmail>
              E-mail
              {/* Campo de cadastro de e-mail */}
              <Input
                type="text"
                placeholder="Insira aqui seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                noValidated={noValidated}
              />
              {/* Alerta de erro caso o e-mail não atenda os requisitos de validação */}
              {emailErro && <AlertError>Digite um e-mail válido!</AlertError>}
            </InputEmail>

            {/* Div do cadastro senha */}
            <InputPassword>
              Senha
              {/* Campo de cadastro de senha */}
              <Input
                type="password"
                placeholder="Crie uma senha válida"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  func(e.target.value);
                }}
                required
                noValidated={noValidated}
              />
              {/* Alerta de erro caso a senha digitada não atenda os requisitos de validação */}
              {passwordErro && (
                <AlertError>
                  A senha digitada não atende aos requisitos!
                </AlertError>
              )}
            </InputPassword>

            {/* Div contendo os critérios de validação da senha */}
            <UnacceptedPassword validated={passwordRequirement.count}>
              6 caracteres
            </UnacceptedPassword>
            <br />
            <UnacceptedPassword>caractere especial</UnacceptedPassword>
            <br />
            <UnacceptedPassword>número</UnacceptedPassword>
            <br />
            <UnacceptedPassword>letra maiúscula</UnacceptedPassword>
            <br />
            <UnacceptedPassword>letra minúscula</UnacceptedPassword>
            <br />

            {/* Div da confirmação da senha cadastrada */}
            <InputConfirmPassword>
              Confirme a senha
              {/* Campo de confirmação da senha cadastrada */}
              <Input
                type="password"
                placeholder="Repita a senha que você criou acima"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                noValidated={noValidated}
              />
              {/* Alerta de erro caso a senha digitada não seja igual à cadastrada */}
              {confirmPasswordErro && (
                <AlertError>
                  A senha informada não confere com a senha digitada acima!
                </AlertError>
              )}
            </InputConfirmPassword>

            {/* Botão de confirmação de cadastro */}
            <CadastroFormButton onClick={validate}>
              Cadastrar
            </CadastroFormButton>

            {/* Link de navegação para a página de Login */}
            <Navegar>
              Já possui cadastro? <Link to="/">&nbsp;Clique aqui!</Link>
            </Navegar>
          </CadastroForm>
        </ContentLeft>
      </ContainerLeft>

      <ContainerRight />
    </MainContainer>
  );
}

export default Cadastro;
