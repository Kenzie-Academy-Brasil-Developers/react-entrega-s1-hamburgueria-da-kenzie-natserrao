import styled from "styled-components";

export const Div = styled.div`
  align-items: flex-start;
  justify-content: center;

  @media (min-width: 1281px) {
    flex-direction: row;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    flex-direction: row;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
  }

  .titleSearch {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--Grey100);

    span {
      color: #828282;
    }
  }
`;

export const StyledUl = styled.ul`
  width: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 0;
  width: 100vw;
  overflow: auto;
  gap: 1rem;
  padding: 1.5rem;

  @media (min-width: 1281px) {
    width: 75vw;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-left: 2rem;
    padding: 1.5rem;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 60vw;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin: 0;
    padding: 1.5rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100vw;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 1.5rem;
  }
`;
