import {
  Main,
  MainContainer,
  HeaderComponent,
  LogoComponent,
  ClockComponent,
  WeatherComponent,
  CenterContainer,
  LogoBallContainer,
  TextContainer,
  TextContainerH3,
  TextContainerH1,
  TextContainerP,
  DescriptionP,
  WellCome,
  Pipe,
  Timer,
  Online,
  Logout,
  Footer,
  SideLeft,
  SideRight,
  SmallText,
  RightCorner,
} from "./styles";
import { Time } from "../../components/Time";
import Location from "../../components/Location";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseApp } from "../Cadastro";
import { getAuth } from "firebase/auth";

function Home() {
  const [cont, setCont] = useState(600);
  const navigate = useNavigate();

  const auth = getAuth(FirebaseApp);

  const [name, setName] = useState();

  useEffect(() => {
    setTimeout(() => setName(auth.currentUser?.displayName.split(" ")[0]));

    const interval = setInterval(() => {
      setCont((cont) => cont - 1);
      if (cont === 0) {
        navigate("/");
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <Main>
        <HeaderComponent>
          <LogoComponent></LogoComponent>
          <ClockComponent>
            <Time />
          </ClockComponent>
          <WeatherComponent>
            <Location />
          </WeatherComponent>
        </HeaderComponent>

        <MainContainer>
          <CenterContainer>
            <LogoBallContainer />
            <TextContainer>
              <TextContainerH3>Our mission is</TextContainerH3>
              <TextContainerP>Nossa missão é</TextContainerP>
              <TextContainerH1>to transform the world</TextContainerH1>
              <TextContainerP>transformar o mundo</TextContainerP>
              <TextContainerH1>building digital experiences</TextContainerH1>
              <TextContainerP>construindo experiências digitais</TextContainerP>
              <TextContainerH1>that enable our clients growth</TextContainerH1>
              <TextContainerP>
                que permitam o crescimento dos nossos clientes
              </TextContainerP>
            </TextContainer>
          </CenterContainer>
        </MainContainer>

        <Footer>
          <SideLeft>
            <WellCome>Bem vindo,</WellCome>
            <p>{name}!</p>
            <DescriptionP>
              Essa janela do navegador é usada para manter sua sessão de
              autenticação ativa. Deixe-a <br />
              aberta em segundo plano e abra uma nova janela para continuar a
              navegar.
            </DescriptionP>
          </SideLeft>
          <Pipe />
          <SideRight>
            <SmallText>Application refresh in</SmallText>
            <Timer>
              <h3>{cont}</h3>
              <p>seconds</p>
            </Timer>
            <RightCorner>
              <Online href="https://gremio.net/">
                Continuar
                <br />
                Navegando
              </Online>
              <Logout
                onClick={() =>
                  auth.signOut().then(() => {
                    navigate("/");
                  })
                }
                href="/"
              >
                Logout
              </Logout>
            </RightCorner>
          </SideRight>
        </Footer>
      </Main>
    </>
  );
}

export default Home;
