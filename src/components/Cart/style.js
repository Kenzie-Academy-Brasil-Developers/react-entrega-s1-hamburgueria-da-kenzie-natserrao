import styled from "styled-components";

export const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;

  @media (min-width: 1281px) {
    width: 40vw;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 30vw;
  }
  @media (min-width: 901px) and (max-width: 1024px) {
    width: 38vw;
  }

  @media (min-width: 768px) and (max-width: 900px) {
    width: 45vw;
    margin-right: 1.5rem;
  }

  .title {
    background-color: var(--DarkGreen);
    border-radius: 5px 5px 0px 0px;
    height: 4rem;
    width: 90vw;

    @media (min-width: 1281px) {
      width: 25vw;
    }

    @media (min-width: 1025px) and (max-width: 1280px) {
      width: 30vw;
    }
    @media (min-width: 901px) and (max-width: 1024px) {
      width: 38vw;
    }

    @media (min-width: 768px) and (max-width: 900px) {
      width: 45vw;
    }
  }
  .title-paragraph {
    font-family: var(--font-family);
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--White);
    margin-left: 1rem;
  }

  .body-cart {
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--Grey0);
    height: auto;
    border-radius: 0px 0px 5px 5px;
    gap: 1rem;
    min-height: 180px;

    @media (min-width: 1281px) {
      width: 25vw;
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
      width: 30vw;
    }
    @media (min-width: 901px) and (max-width: 1024px) {
      width: 38vw;
    }
    @media (min-width: 768px) and (max-width: 900px) {
      width: 45vw;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1.2rem 0;
    }

    .lista-cart {
      display: flex;
      width: 80vw;
      flex-direction: row;
      align-items: flex-start;
      gap: 1rem;
      justify-content: flex-start;

      img {
        width: 20vw;
        background-color: #e0e0e0;
        border-radius: 5px;
      }

      .div-cart {
        gap: 1rem;
      }

      .div-cart p {
        font-family: var(--font-family);
        font-size: 1rem;
        font-weight: 700;
        color: var(--Grey100);
      }

      .div-cart span {
        font-family: var(--font-family);
        font-size: 0.7rem;
        font-weight: 500;
        color: var(--Grey50);
      }
      .btn-cart {
        font-family: var(--font-family);
        font-size: 0.8rem;
        font-weight: 500;
        color: #bdbdbd;
        transition: 0.3s;
      }
      .btn-cart:hover {
        color: var(--Grey100);
        text-decoration: underline;
        transition: 0.3s;
      }
    }

    @media (min-width: 1281px) {
      .lista-cart {
        width: 20vw;
        img {
          width: 6vw;
        }
      }
    }

    @media (min-width: 1025px) and (max-width: 1280px) {
      .lista-cart {
        width: 26vw;
        img {
          width: 7vw;
        }
      }
    }
    @media (min-width: 901px) and (max-width: 1024px) {
      .lista-cart {
        width: 32vw;
        img {
          width: 8vw;
        }
      }
    }

    @media (min-width: 768px) and (max-width: 900px) {
      .lista-cart {
        width: 38vw;
        img {
          width: 8.5vw;
        }
      }
    }

    @media (min-width: 500px) and (max-width: 767px) {
      .lista-cart {
        width: 80vw;
        img {
          width: 13vw;
        }
      }
    }
  }
`;
