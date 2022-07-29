import styled from "styled-components";

export const StyledHeader = styled.header`
  align-items: center;
  background-color: var(--Grey0);

  .container {
    align-items: center;
    gap: 1.5rem;
    width: 95vw;

    @media (min-width: 600px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  img {
    width: 10rem;
    height: 2rem;
  }
  .containerSearch {
    background-color: white;
    border-radius: 8px;
    border: 2px solid var(--Grey20);
    width: 18rem;
    height: 3.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (min-width: 1281px) {
      width: 21.5rem;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      width: 21rem;
    }
  }
  .containerSearch:focus-within {
    border: 2px solid var(--Grey100);
  }

  form {
    width: 100%;
  }

  input {
    border: none;
    width: 60%;
    padding: 0 1rem;
  }
  input::placeholder {
    font-family: var(--font-family);
    font-size: 1rem;
    font-weight: 40s0;
    color: var(--Grey20);
  }
  input:focus {
    outline: 0;
  }

  button {
    background-color: var(--DarkGreen);
    border: 2px solid #27ae60;
    border-radius: 8px;
    font-family: var(--font-family);
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--White);
    width: 38%;
    height: 2.5rem;
  }
  button:hover {
    background-color: var(--LightGreen);
    border: 2px solid var(--LightGreen);
    transition: 0.3s;
  }
`;
