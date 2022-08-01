import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
  padding: 0;
  border-radius: 5px;
  transition: ease-in-out 0.1s;
  gap: 16px;
  width: 100vw;
  max-width: 100vw;
  border: 2px solid #e0e0e0;
  border-radius: 8px;

  :hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  @media (min-width: 1281px) {
    width: 18.5vw;
    max-width: 18.5vw;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 21vw;
    max-width: 21vw;
  }
  @media (min-width: 901px) and (max-width: 1024px) {
    width: 40vw;
    max-width: 40vw;
  }
  @media (min-width: 768px) and (max-width: 900px) {
    width: 40vw;
    max-width: 40vw;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 50vw;
    max-width: 50vw;
  }

  div {
    width: 70vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border-radius: 8px 8px 0 0;

    @media (min-width: 1281px) {
      width: 18.2vw;
      max-width: 18.2vw;
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
      width: 20.7vw;
      max-width: 20.7vw;
    }
    @media (min-width: 900px) and (max-width: 1024px) {
      width: 39vw;
      max-width: 40vw;
    }
    @media (min-width: 768px) and (max-width: 899px) {
      width: 39.5vw;
      max-width: 40vw;
    }
    @media (min-width: 481px) and (max-width: 767px) {
      width: 47vw;
      max-width: 48vw;
    }
  }

  img {
    width: 100px;
    height: 9rem;

    @media (min-width: 1281px) {
      width: 100px;
    }

    @media (min-width: 1025px) and (max-width: 1280px) {
      width: 100px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      width: 100px;
    }

    @media (min-width: 481px) and (max-width: 767px) {
      width: 80px;
    }
  }

  h3 {
    font-family: var(--font-family);
    color: var(--Grey100);
    font-size: 1.2rem;
    margin-left: 0.5rem;
  }
  span {
    font-family: var(--font-family);
    color: var(--Grey50);
    font-size: 0.8rem;
    margin-left: 0.5rem;
  }
  p {
    font-family: var(--font-family);
    color: var(--DarkGreen);
    font-size: 0.8rem;
    font-weight: 600;
    margin-left: 0.5rem;
  }
  button {
    font-family: var(--font-family);
    background-color: var(--DarkGreen);
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--White);
    border: 2px solid #27ae60;
    border-radius: 8px;
    width: 5rem;
    height: 2.5rem;
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
    transition: 0.3s;
  }
  button:hover {
    background-color: var(--LightGreen);
    border: 2px solid var(--LightGreen);
    transition: 0.3s;
  }
`;
