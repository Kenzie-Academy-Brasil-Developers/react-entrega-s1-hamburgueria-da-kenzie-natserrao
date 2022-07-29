import { StyledTotal } from "./style";

export const CardTotal = ({ totalPrice, setCurrentSale }) => {
  function removeAll() {
    setCurrentSale([]);
  }

  return (
    <StyledTotal>
      <div className="div-total">
        <p>Total:</p>
        <span>R${totalPrice}</span>
      </div>
      <button onClick={removeAll}>Remover todos</button>
    </StyledTotal>
  );
};
