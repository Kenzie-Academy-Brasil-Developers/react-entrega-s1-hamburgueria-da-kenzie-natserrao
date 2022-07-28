import { CardProduct } from "../CartProduct";
import { StyledAside } from "./style";
import { InfoCard } from "../InfoCard";
import { StyledTotal } from "../CardTotal/style";

export const Cart = ({ currentSale }) => {
  return (
    <StyledAside>
      <div className="title">
        <p className="title-paragraph">Carrinho de compras</p>
      </div>

      <div className="body-cart">
        <InfoCard currentSale={currentSale} />
        {currentSale.map((elem) => (
          <li className="lista-cart" key={elem.id}>
            <CardProduct
              img={elem.img}
              name={elem.name}
              category={elem.category}
            />
          </li>
        ))}
      </div>
    </StyledAside>
  );
};
