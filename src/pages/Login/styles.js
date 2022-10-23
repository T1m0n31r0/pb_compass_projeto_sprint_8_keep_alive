import styled from "styled-components";
import MaskGroup from "../../assets/MaskGroup.png";

export const MainContainer = styled.div`
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  display: flex;
  font-family: "Mark Pro", sans-serif;
`;

export const ContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  background-image: url(${MaskGroup});
  background-size: cover;
  background-position: center;
  color: #e0e0e0;

  @media (min-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
    background-image: url(${MaskGroup});
    background-size: cover;
    background-position: center;
    color: #e0e0e0;
  }

  @media (min-width: 375px) {
  }

  @media (min-width: 425px) {
  }

  @media (min-width: 653px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 850px) {
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 100vh;
    background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
    color: #e0e0e0;
  }
  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 100vh;
    color: #e0e0e0;
    border: none;
  }
`;

export const ContentLeft = styled.div`
  margin: 80px 16px 0 16px;
  padding: 8px;
  width: 100%;
  max-width: 460px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  opacity: 85%;
  border-radius: 15px;
  @media (min-width: 320px) {
    margin: 24px 16px 0 16px;
    padding: 8px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
    opacity: 85%;
    border-radius: 15px;
  }
  @media (min-width: 768px) {
    margin: 5%;
    padding: 5%;
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 70%;
    background: none;
  }
  @media (min-width: 1440px) {
    margin: 2%;
    padding: 2%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: none;
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  @media (min-width: 1440px) {
    border: none;
  }
`;

export const ContentTextH1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 3.75rem;
    font-weight: 400;
  }

  @media (min-width: 1440px) {
    font-size: 60px;
    border: none;
  }
`;

export const ContentTextP = styled.p`
  margin: 16px 0 48px 0;
  font-size: 0.75rem;
  font-weight: 400;
  @media (min-width: 320px) {
    margin: 24px 0 56px 0;
  }
  @media (min-width: 768px) {
    font-size: 1rem;
    font-weight: 400;
    @media (min-width: 1440px) {
      font-size: 16px;
      border: none;
    }
  }
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1440px) {
    border: none;
  }
`;

export const LoginFormH1 = styled.h1`
  margin-bottom: 16px;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 400;
  @media (min-width: 320px) {
    margin-bottom: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
    border: none;
  }
`;

export const Input = styled.input`
  border: ${({ noValidated }) =>
    noValidated ? "1px solid #E9B425" : "1px solid white"};
  width: 100%;
  padding: 16px 8px;
  box-sizing: border-box;
  background: #26292c;
  color: #fff;
  border-radius: 50px;
  outline: 0;

  ::placeholder {
    font-size: 0.75rem;
    color: #e0e0e0;
  }
  @media (min-width: 1440px) {
    ::placeholder {
      font-size: 16px;
      color: #e0e0e0;
    }
  }
`;

export const InputEmail = styled.div`
  margin: 16px 0;
  display: flex;
  align-items: center;
  width: 100%;
  @media (min-width: 320px) {
    margin: 24px 0;
  }

  @media (min-width: 1440px) {
    margin: 16px 0 16px 0;
    height: 60px;
    border: none;
  }
`;

export const InputPassword = styled.div`
  margin: 16px 0;
  display: flex;
  align-items: center;
  width: 100%;
  @media (min-width: 320px) {
    margin: 24px 0;
  }

  @media (min-width: 1440px) {
    margin: 16px 0 16px 0;
    height: 60px;
    border: none;
  }
`;

export const Icone = styled.div`
  margin-left: 12px;
  transition: 1s;
  ${(props) =>
    props.selected || props.focus
      ? "transform: translate(-45px,0)"
      : "transform: translate(0)"}
`;

export const LoginFormButton = styled.button`
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
  color: #fff;
  padding: 16px 8px;
  margin-top: 48px;
  border: 0;
  font-size: 0.8rem;
  font-weight: 500;
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 50px;
  filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5));
  cursor: pointer;
  @media (min-width: 320px) {
    margin-top: 56px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const Erro = styled.span`
  font-size: 1rem;
  text-align: center;
  line-height: 24px;
  color: #e9b425;
  width: 80%;
  margin-left: 1.7rem;
`;

export const ContainerRight = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    background-image: url(${MaskGroup});
    background-size: cover;
    background-position: center;
    width: 50vw;
    height: 100vh;
  }
  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${MaskGroup});
    background-size: cover;
    width: 50vw;
    border: none;
  }
`;

export const Navegar = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
  text-align: center;
  Link {
    color: blue;
  }
  @media (min-width: 320px) {
    gap: 16px;
    margin: 16px;
    font-size: 16px;
  }
`;
