import { Products } from "../../Products";

export const List = ({ productList, handleClick }) => {
  return (
    <>
      {productList.map((product) => (
        <Products
          key={product.id}
          name={product.name}
          img={product.img}
          category={product.category}
          price={product.price}
          handleClick={() => handleClick(product.id)}
        />
      ))}
    </>
  );
};
