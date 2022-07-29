import { CardProduct } from "../CartProduct";
import { StyledAside } from "./style";
import { InfoCard } from "../InfoCard";
import { CardTotal } from "../CardTotal";

export const Cart = ({ currentSale, setCurrentSale }) => {
  const totalPrice = currentSale.reduce((acc, valorIncicial) => {
    return parseFloat((acc + valorIncicial.price).toFixed(2));
  }, 0);

  function handleRemove(product) {
    const newList = currentSale.filter((elem) => elem !== product);
    setCurrentSale(newList);
  }

  return (
    <StyledAside>
      <div className="title">
        <p className="title-paragraph">Carrinho de compras</p>
      </div>

      <div className="body-cart">
        {currentSale.length > 0 ? (
          <ul>
            {currentSale.map((elem) => (
              <li className="lista-cart" key={elem.id}>
                <CardProduct
                  img={elem.img}
                  name={elem.name}
                  category={elem.category}
                  handleRemove={() => handleRemove(elem)}
                />
              </li>
            ))}
          </ul>
        ) : (
          <InfoCard />
        )}
      </div>
      {currentSale.length > 0 && (
        <CardTotal totalPrice={totalPrice} setCurrentSale={setCurrentSale} />
      )}
    </StyledAside>
  );
};
