import styled from "styled-components";

export const Location = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Mark Pro", sans-serif;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    // border: 1px solid blue;
  }
  h2 {
    font-size: 0.9rem;
    font-weight: 700;
  }
  p {
    font-size: 0.6rem;
    font-weight: 400;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Mark Pro", sans-serif;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    h2 {
      margin: 15px 0 0 10px;
      font-size: 3rem;
      font-weight: 700;
    }
    p {
      font-size: 0.9rem;
      font-weight: 400;
    }
  }
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Mark Pro", sans-serif;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    h2 {
      margin: 15px 0 0 10px;
      font-size: 3rem;
      font-weight: 700;
    }
    p {
      font-size: 0.9rem;
      font-weight: 400;
    }
  }
`;
