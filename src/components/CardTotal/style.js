import styled from "styled-components";

export const StyledTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
  width: 90vw;
  height: 7rem;
  background-color: var(--Grey0);
  border-radius: 0px 0px 5px 5px;
  border-top: 2px solid #e0e0e0;
  gap: 18px;
  padding: 10px;

  @media (min-width: 1281px) {
    width: 25vw;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 30vw;
  }
  @media (min-width: 901px) and (max-width: 1024px) {
    width: 90vw;
  }
  @media (min-width: 768px) and (max-width: 900px) {
    width: 90vw;
  }

  .div-total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 0.5rem;
    width: 80vw;

    @media (min-width: 1281px) {
      width: 23vw;
    }

    @media (min-width: 1025px) and (max-width: 1280px) {
      width: 28vw;
    }
    @media (min-width: 901px) and (max-width: 1024px) {
      width: 80vw;
    }

    @media (min-width: 768px) and (max-width: 900px) {
      width: 80vw;
    }

    p {
      font-family: var(--font-family);
      font-size: 0.9rem;
      font-weight: 700;
      color: var(--Grey100);
    }
    span {
      font-family: var(--font-family);
      font-size: 0.9rem;
      font-weight: 700;
      color: #828282;
    }
  }

  button {
    font-family: var(--font-family);
    font-size: 1rem;
    font-weight: 600;
    background-color: var(--Grey20);
    border-radius: 8px;
    color: #828282;
    width: 80vw;
    height: 3.5rem;
    transition: 0.3s;

    @media (min-width: 1281px) {
      width: 22vw;
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
      width: 28vw;
    }
    @media (min-width: 901px) and (max-width: 1024px) {
      width: 80vw;
    }
    @media (min-width: 768px) and (max-width: 900px) {
      width: 80vw;
    }
  }

  button:hover {
    background-color: #828282;
    color: var(--Grey20);
    transition: 0.3s;
  }
`;
