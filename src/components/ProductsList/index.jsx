import { Cart } from "../Cart";
import { StyledUl } from "./style";
import { Div } from "./style";
import { useState } from "react";
import { toast } from "react-toastify";
import { List } from "./List";

export const ProductsList = ({
  products,
  filteredProducts,
  busca,
  activeSearch,
}) => {
  const [currentSale, setCurrentSale] = useState([]);

  function handleClick(productId) {
    const productAdd = products.find((elem) => elem.id === productId);

    const newProduct = {
      id: productAdd.id,
      name: productAdd.name,
      price: productAdd.price,
      category: productAdd.category,
      img: productAdd.img,
    };
    if (currentSale.find((elem) => elem.id === productId)) {
      toast.warning("O produto já está no carrinho");
    } else {
      setCurrentSale([...currentSale, newProduct]);
    }
  }

  return (
    <Div>
      <StyledUl>
        <div className="containerSearch">
          {activeSearch && (
            <h2 className="titleSearch">
              Resultados para: <span>{busca}</span>
            </h2>
          )}
        </div>
        {activeSearch && filteredProducts.length === 0 ? (
          <h2 className="titleSearch">Nenhum produto encontrado!</h2>
        ) : (
          <List
            productList={
              filteredProducts.length > 0 ? filteredProducts : products
            }
            handleClick={handleClick}
          />
        )}
      </StyledUl>
      <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
    </Div>
  );
};
