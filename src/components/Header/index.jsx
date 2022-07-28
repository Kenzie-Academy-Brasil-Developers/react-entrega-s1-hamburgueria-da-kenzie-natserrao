import Logo from "../../assets/LogoHamburguer.svg";
import { Container } from "../../styles/global";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <Container className="container">
        <img src={Logo} alt="Hamburguer Kenzie Logo" />
        <div className="containerSearch">
          <input type="text" placeholder="Digitar pesquisa" />
          <button>Pesquisar</button>
        </div>
      </Container>
    </StyledHeader>
  );
};
