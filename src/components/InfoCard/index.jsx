import { InfoDiv } from "./style";

export const InfoCard = ({ currentSale }) => {
  return (
    <InfoDiv currentSale={currentSale}>
      <p>Sua sacola está vazia</p>
      <span>Adicione itens</span>
    </InfoDiv>
  );
};
