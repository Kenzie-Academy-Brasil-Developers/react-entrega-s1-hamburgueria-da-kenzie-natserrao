import { StyledLi } from "./style";

export const Products = ({ name, img, category, price, handleClick, id }) => {
  return (
    <StyledLi>
      <div className="container-image">
        <img src={img} alt="Imagem do Produto" />
      </div>

      <h3>{name}</h3>
      <span>{category}</span>
      <p>R$ {price}</p>
      <button onClick={() => handleClick(id)}>Adicionar</button>
    </StyledLi>
  );
};
