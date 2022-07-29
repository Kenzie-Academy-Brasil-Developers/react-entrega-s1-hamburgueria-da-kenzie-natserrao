export const CardProduct = ({ img, name, category, handleRemove }) => {
  return (
    <>
      <img src={img} alt="Foto Produto" />
      <div className="div-cart">
        <p>{name}</p>
        <span>{category}</span>
      </div>
      <button onClick={handleRemove} className="btn-cart">
        Remover
      </button>
    </>
  );
};
