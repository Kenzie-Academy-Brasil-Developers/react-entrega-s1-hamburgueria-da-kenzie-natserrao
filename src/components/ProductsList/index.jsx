import { Cart } from "../Cart";
import { Products } from "../Products";
import { StyledUl } from "./style";
import { Div } from "./style";
import { useState } from "react";
import { toast } from "react-toastify";

export const ProductsList = ({ products, filteredProducts, busca }) => {
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
        <div>
          {filteredProducts.length > 0 && (
            <h2 className="titleSearch">
              Resultados para: <span>{busca}</span>
            </h2>
          )}
        </div>
        {(filteredProducts.length > 0 ? filteredProducts : products).map(
          (product) => (
            <Products
              key={product.id}
              name={product.name}
              img={product.img}
              category={product.category}
              price={product.price}
              handleClick={() => handleClick(product.id)}
            />
          )
        )}
      </StyledUl>
      <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
    </Div>
  );
};
