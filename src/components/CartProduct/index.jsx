export const CardProduct = ({ img, name, category }) => {
  return (
    <>
      <img src={img} alt="Foto Produto" />
      <div className="div-cart">
        <p>{name}</p>
        <span>{category}</span>
      </div>
      <button className="btn-cart">Remover</button>
    </>
  );
};
