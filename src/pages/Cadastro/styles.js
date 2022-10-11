import styled from "styled-components";
import MaskGroup from "../../assets/MaskGroup.png";

export const MainContainer = styled.div`
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  display: flex;
  max-width: 100vw;
  max-height: 100vh;
  font-family: "Mark Pro", sans-serif;
`;

export const ContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${MaskGroup});
  background-size: cover;
  background-position: center;
  color: #e0e0e0;
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
    border: 1px solid #fff;
  }
`;

export const ContentLeft = styled.div`
  margin: 384px 16px 0 16px;
  padding: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  opacity: 85%;
  border-radius: 15px;
  border: 1px solid yellow;
  @media (min-width: 320px) {
    margin: 256px 16px 0 16px;
    padding: 16px;
    border: 1px solid yellow;
  }

  @media (min-width: 768px) {
    margin: 256px 0 0 0;
    padding: 16px;
    padding: 5%;
    width: 50%;
    border: 1px solid yellow;
  }
  @media (min-width: 1024px) {
    width: 70%;
    background: none;
    border: 1px solid yellow;
  }
  @media (min-width: 1440px) {
    margin: 0;
    padding: 0;
    width: 50%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid yellow;
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  border: 1px solid blue;
`;

export const ContentTextH1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 3.75rem;
    font-weight: 400;
  }
  border: 1px solid red;
`;

export const ContentTextP = styled.p`
  margin: 5% 0 10% 0;
  font-size: 0.75rem;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 1rem;
    font-weight: 400;
  }
  border: 1px solid purple;
`;

export const CadastroForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #fff;
`;

export const CadastroFormH1 = styled.h1`
  margin-bottom: 2%;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 400;
  border: 1px solid orange;
`;

export const Input = styled.input`
  border: ${({ validated }) =>
    validated ? "1px solid #E9B425" : "1px solid white"};
  width: 100%;
  padding: 15px 10px;
  box-sizing: border-box;
  background: #26292c;
  color: #fff;
  border-radius: 50px;
  outline: 0;

  ::placeholder {
    font-size: 0.75rem;
    color: #e0e0e0;
  }
`;

export const InputNome = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  border: 1px solid green;
`;

export const InputSobrenome = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  border: 1px solid green;
`;

export const InputEmail = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  border: 1px solid green;
`;

export const InputPassword = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  border: 1px solid green;
`;

export const UnacceptedPassword = styled.span`
  margin: 0 0 16px 18px;
  display: ${({ validated }) => (validated ? "block" : "none")};
  font-size: 0.75rem;
  color: ${({ validated }) => (validated ? "green" : "#ff2d04")};
`;

export const InputConfirmPassword = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  border: 1px solid green;
`;

export const CadastroFormButton = styled.button`
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
  color: #fff;
  padding: 15px 10px;
  margin-top: 3rem;
  border: 0;
  font-size: 0.8rem;
  font-weight: 500;
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 50px;
  filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5));
  cursor: pointer;
`;

export const Navegar = styled.p`
  margin-top: 16px;
  text-align: center;
`;

export const Erro = styled.span`
  font-size: 1rem;
  text-align: center;
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
    /* background-position: center; */
    width: 50vw;
    /* height: 100vh; */
  }
  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${MaskGroup});
    background-size: cover;
    width: 50vw;
    /* height: 100vh; */
  }
  border: 1px solid yellow;
`;

export const AlertError = styled.span`
  /* margin: 0 0 16px 18px; */
  font-size: 1rem;
  color: #ff2d04;
  border: 1px solid pink;
`;
