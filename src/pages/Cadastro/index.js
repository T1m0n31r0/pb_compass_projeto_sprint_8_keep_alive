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
  InputEmail,
  InputPassword,
  InputConfirmPassword,
  UnacceptedPassword,
  CadastroFormButton,
  ContainerRight,
  AlertError,
  Navegar,
  Content,
  Title,
  Text,
} from "./styles";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../../utils/regex";
// Importações do Firebase
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";

// Inicialização do Firebase
export const FirebaseApp = initializeApp({
  apiKey: "AIzaSyBlRUY3f-lv5nNGVmWoWqgp3WiKbQScJg8",
  authDomain: "keepalive-72076.firebaseapp.com",
  projectId: "keepalive-72076",
});

function Cadastro() {
  // Estado das variáveis: firstName, lastName, email, password e confirmPassword
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // Conexão com o Firebase
  const db = getFirestore(FirebaseApp);
  const [users, setUsers] = useState([]);

  const userCollectionRef = collection(db, "users");

  // Função cadastrar usuário

  function cadastrarUser() {
    const auth = getAuth(FirebaseApp);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: firstName,
        });
      })
      .then(() => {
        addDoc(userCollectionRef, {
          firstName,
          email,
        });
      })
      .then(() => navigate("/"))

      .catch((error) => console.log(error));
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  // Fim da conexão com o Firebase

  const [firstNameErro, setFirstNameErro] = useState(false);
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
    if (firstName.length < 4) {
      setFirstNameErro(true);
    } else {
      setFirstNameErro(false);
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
    console.log(validatePassword);

    // Confirmação da senha
    if (confirmPassword !== password) {
      setConfirmPasswordErro(true);
    } else {
      setConfirmPasswordErro(false);
    }
    if (!firstNameErro && !emailErro && !passwordErro && !confirmPasswordErro) {
   
      cadastrarUser();
    } 
    
    else return setNoValidated(false);
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
                placeholder="Insira seu nome completo"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                noValidated={noValidated}
              />
              {/* Alerta de erro caso o nome não atenda os requisitos de validação */}
              {firstNameErro && <AlertError>O nome inválido!</AlertError>}
            </InputNome>

            {/* Div do cadastro de e-mail */}
            <InputEmail>
              E-mail
              {/* Campo de cadastro de e-mail */}
              <Input
                type="text"
                placeholder="Insira seu melhor e-mail"
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
                placeholder="Crie uma senha"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  func(e.target.value);
                }}
                required
                noValidated={noValidated}
              />
              {/* Alerta de erro caso a senha digitada não atenda os requisitos de validação */}
              {passwordErro && <AlertError>A senha digitada não atende aos requisitos!</AlertError>
              }
              {/* <Content> */}
              {/* <Title>Sua senha deve conter:</Title>
                <br />
                <View>
                  <Text>No mínimo 6 caracteres</Text>
                </View>
                <View>
                  <Text>Letra maiúscula</Text>
                </View>
                <View>
                  <Text>Letra minúscula</Text>
                </View>
                <View>
                  <Text>Número</Text>
                </View>
                <View>
                  <Text>Caractere especial</Text>
                </View> */}
              {/* </Content>
              <br /> */}
            </InputPassword>

            {/* Div contendo os critérios de validação da senha */}
            {/* <UnacceptedPassword validated={passwordRequirement.count}>
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
            <br /> */}

            {/* Div da confirmação da senha cadastrada */}
            <InputConfirmPassword>
              Confirme a senha
              {/* Campo de confirmação da senha cadastrada */}
              <Input
                type="password"
                placeholder="Repita a senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                noValidated={noValidated}
              />
              {/* Alerta de erro caso a senha digitada não seja igual à cadastrada */}
              {confirmPasswordErro && 
                <AlertError>A senha informada não confere com a senha digitada acima!</AlertError>}
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
