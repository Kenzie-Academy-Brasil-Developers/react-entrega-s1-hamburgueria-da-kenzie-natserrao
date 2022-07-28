import { StyledTotal } from "./style";

export const CardTotal = () => {
  return (
    <StyledTotal>
      <div>
        <p>Total</p>
        <span>R$</span>
      </div>
      <button>Remover todos</button>
    </StyledTotal>
  );
};
