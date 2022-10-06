import styled from "styled-components";
import bolaLogoCompasso1 from "../../assets/bolaLogoCompasso1.svg";
import LogoCompasso1 from "../../assets/LogoCompasso1.svg";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  @media (min-width: 1440px) {
    width: 100vw;
    height: 100vh;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 54%;
  display: flex;
  font-family: "Mark Pro", sans-serif;
  @media (min-width: 768px) {
    height: 75%;
    // border: 1px solid green;
  }
  @media (min-width: 1440px) {
    width: 100%;
    height: 68.5%;
  }
`;

export const HeaderComponent = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  @media (min-width: 768px) {
    align-items: center;
  }
  @media (min-width: 1024px) {
    border: none;
  }
  @media (min-width: 1440px) {
    margin: 25px 40px 20px 40px;
    display: flex;
    justify-content: space-between;
  }
`;

export const LogoComponent = styled.div`
  margin: 8px;
  background-image: url(${LogoCompasso1});
  width: 150px;
  height: 42.75px;
  // border: 1px solid blue;
  @media (min-width: 768px) {
    margin: 16px;
  }
  @media (min-width: 1024px) {
    margin: 32px;
  }
  @media (min-width: 1440px) {
    background-image: url(${LogoCompasso1});
    width: 150px;
    height: 42.75px;
  }
`;

export const ClockComponent = styled.div`
  @media (min-width: 768px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    // border: 1px solid yellow;
  }
  @media (min-width: 1440px) {
    text-align: center;
    display: flex;
    flex-direction: column;
  }
`;

export const WeatherComponent = styled.div`
  margin: 8px;
  // border: 1px solid purple;
  @media (min-width: 768px) {
    margin: 16px;
  }
  @media (min-width: 1024px) {
    margin: 32px;
  }
  @media (min-width: 1440px) {
    width: 121px;
    height: 78px;
  }
`;

export const CenterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-end;
    // border: 1px solid orangered;
  }
  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LogoBallContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    margin: 36px 0 0 0;
    display: flex;
    width: 50%;
    height: 50%;
    background-image: url(${bolaLogoCompasso1});
    background-size: cover;
    background-position: top;
    // border: 1px solid green;
  }
  @media (min-width: 1024px) {
    width: 50%;
    height: 85%;
  }
  @media (min-width: 1440px) {
    margin-top: 48px;
    width: 36.96rem;
    height: 36.96rem;
    background-image: url(${bolaLogoCompasso1});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const TextContainer = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    text-align: right;
    margin: 0 96px 0 0;
    // border: 1px solid blue;
  }
  @media (min-width: 1440px) {
    margin-right: 134px;
    text-align: right;
  }
`;

export const TextContainerH3 = styled.h3`
  margin: 8px 8px 0 8px;
  font-size: 1.5rem;
  font-weight: 700;
  color: red;
  @media (min-width: 768px) {
    margin-left: 0;
    // border: 1px solid pink;
  }
  @media (min-width: 1024px) {
    margin: 0;
    font-size: 1.75rem;
    font-weight: 700;
    color: red;
    // border: 1px solid pink;
  }
  @media (min-width: 1440px) {
    margin: 0;
    font-size: 36px;
    font-weight: 700;
    color: red;
  }
`;

export const TextContainerH1 = styled.h1`
  margin: 12px 8px 0 8px;
  font-size: 2rem;
  font-weight: 700;
  color: red;
  // border: 1px solid green;
  @media (min-width: 1024px) {
    margin: 0;
    font-size: 3rem;
    font-weight: 700;
    color: red;
    // border: 1px solid green;
  }
  @media (min-width: 1440px) {
    margin: 0;
    font-size: 64px;
    font-weight: 700;
    color: red;
  }
`;

export const TextContainerP = styled.p`
  margin: 0 8px 8px 8px;
  font-size: 0.9rem;
  font-weight: 400;
  // border: 1px solid orange;
  @media (min-width: 1024px) {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 400;
    // border: 1px solid orange;
  }
  @media (min-width: 1440px) {
    margin: 0;
    font-size: 24px;
    font-weight: 400;
  }
`;

export const Footer = styled.footer`
  margin: 0;
  width: 100%;
  height: 39.1%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
  font-family: "Mark Pro", sans-serif;
  color: #fff;
  @media (min-width: 768px) {
    margin: 0;
    display: flex;
    flex-direction: row;
    height: 13%;
    background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
    font-family: "Mark Pro", sans-serif;
    color: #fff;
    // border-bottom: 1px solid #1c1d20;
  }
  @media (min-width: 1440px) {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100px;
    background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
    font-family: "Mark Pro", sans-serif;
    color: #fff;
    border-bottom: 1px solid #1c1d20;
  }
`;

export const SideLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
  // border: 1px solid green;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    // border: 1px solid blue;
  }
  @media (min-width: 1440px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50vw;
    height: 98px;
  }
`;

export const SideRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50%;
  // border: 1px solid green;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 100%;
    // border: 1px solid red;
  }
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50vw;
    height: 100%;
  }
`;

export const DescriptionP = styled.p`
  margin: 8px 8px 0 8px;
  font-size: 0.75rem;
  text-align: center;
  // border: 1px solid red;
  @media (min-width: 768px) {
    width: 80%;
    text-align: right;
    // border: 1px solid white;
  }
  @media (min-width: 1440px) {
    margin-right: 35px;
    text-align: right;
  }
`;

export const Pipe = styled.div`
  margin: 0 8px 8px 8px;
  width: 50%;
  border: 1px solid #fff;
  @media (min-width: 768px) {
    width: 0;
    height: 60%;
    border: 1px solid #fff;
  }
  @media (min-width: 1440px) {
    height: 61px;
    border: 1px solid #fff;
    border: 1px solid white;
  }
`;

export const SmallText = styled.p`
  margin: 4px 8px;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  text-align: right;
  // border: 1px solid red;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    width: 20%;
    // height: 41px;
    text-align: right;
    // border: 1px solid yellow;
  }
  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    margin-left: 123px;
    width: 109px;
    height: 61px;
    text-align: right;
  }
`;

export const Timer = styled.div`
  margin: 4px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h3 {
    font-size: 3rem;
  }
  // border: 1px solid yellow;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    height: 50%;
    h3 {
      font-size: 2rem;
    }
    // border: 1px solid green;
  }
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 369px;
    width: 97px;
    height: 61px;
    h3 {
      font-size: 3rem;
    }
  }
`;

export const RightCorner = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  // border: 1px solid violet;
  @media (min-width: 768px) {
    display: flex;
    width: 60%;
    height: 100%;
    // border: 1px solid pink;
  }
  @media (min-width: 1440px) {
    display: flex;
    width: 262px;
    height: 100%;
  }
`;

export const Online = styled.a`
  margin: 4px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 400;
  color: #c13216;
  text-align: center;
  background-color: #fff;
  // border: 1px solid blue;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 50%;
    height: 100%;
    text-decoration: none;
    font-size: 12px;
    font-weight: 400;
    color: #c13216;
    text-align: center;
    background-color: #fff;
    // border: 1px solid blue;
  }
  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 131px;
    height: 100%;
    text-decoration: none;
    font-size: 12px;
    font-weight: 400;
    color: #c13216;
    text-align: center;
    background-color: #fff;
  }
`;

export const Logout = styled.a`
  margin: 4px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  // border: 1px solid white;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 50%;
    height: 100%;
    text-decoration: none;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    // border: 1px solid white;
  }
  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 131px;
    height: 100%;
    text-decoration: none;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    text-align: center;
  }
`;
