import styled from "styled-components";

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  p {
    font-family: var(--font-family);
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--Grey100);
  }

  span {
    font-family: var(--font-family);
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--Grey50);
  }
`;
