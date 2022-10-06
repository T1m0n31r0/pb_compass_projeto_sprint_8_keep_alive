import styled from "styled-components";

export const TimeDay = styled.div`
  display: none;
  @media (min-width: 768px) {
    font-family: "Mark Pro", sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;

    p {
      font-weight: 700;
      font-size: 3rem;
    }
    span {
      font-weight: 360;
      margin-top: -0.5rem;
      font-size: 0.5rem;
    }
  }
  @media (min-width: 1024px) {
    font-family: "Mark Pro", sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;

    p {
      font-weight: 700;
      font-size: 6rem;
    }
    span {
      font-weight: 360;
      margin-top: -0.5rem;
      font-size: 0.75rem;
    }
  }
  @media (min-width: 1440px) {
    font-family: "Mark Pro", sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;

    p {
      font-weight: 700;
      font-size: 9rem;
    }
    span {
      font-weight: 360;
      margin-top: -0.5rem;
      font-size: 1rem;
    }
  }
`;
