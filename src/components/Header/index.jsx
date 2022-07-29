import Logo from "../../assets/LogoHamburguer.svg";
import { Container } from "../../styles/global";
import { StyledHeader } from "./style";

export const Header = ({ showProducts, busca, setBusca }) => {
  return (
    <StyledHeader>
      <Container className="container">
        <img src={Logo} alt="Hamburguer Kenzie Logo" />
        <div className="containerSearch">
          <form onSubmit={showProducts}>
            <input
              type="text"
              value={busca}
              placeholder="Digitar pesquisa"
              onChange={(e) => setBusca(e.target.value.toLowerCase())}
            />
            <button type="submit">Pesquisar</button>
          </form>
        </div>
      </Container>
    </StyledHeader>
  );
};
