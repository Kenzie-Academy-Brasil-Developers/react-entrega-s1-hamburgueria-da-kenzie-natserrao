import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import api from "./services/api";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);
  const [busca, setBusca] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [activeSearch, setActiveSearch] = useState(false);

  function showProducts(e) {
    e.preventDefault();
    const buscaTratada = busca.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const newFilter = products.filter(
      (product) =>
        product.name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .includes(buscaTratada) ||
        product.category
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .includes(buscaTratada)
    );

    setFilteredProduct(newFilter);
    setActiveSearch(true);
  }

  useEffect(() => {
    api
      .get("products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <ToastContainer autoClose={3000} />
      <Header busca={busca} setBusca={setBusca} showProducts={showProducts} />
      <ProductsList
        products={products}
        filteredProducts={filteredProduct}
        busca={busca}
        activeSearch={activeSearch}
      />
    </div>
  );
}

export default App;
