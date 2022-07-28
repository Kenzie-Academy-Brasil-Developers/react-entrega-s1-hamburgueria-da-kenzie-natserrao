import { Cart } from "../Cart";
import { Products } from "../Products";
import { StyledUl } from "./style";
import { Div } from "./style";
import { useState } from "react";
import { InfoCard } from "../InfoCard";

export const ProductsList = ({ products }) => {
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
    setCurrentSale([...currentSale, newProduct]);
  }
  console.log(currentSale);

  return (
    <Div>
      <StyledUl>
        {products.map((product) => (
          <Products
            key={product.id}
            name={product.name}
            img={product.img}
            category={product.category}
            price={product.price}
            handleClick={() => handleClick(product.id)}
          />
        ))}
      </StyledUl>
      <Cart currentSale={currentSale} />
    </Div>
  );
};
