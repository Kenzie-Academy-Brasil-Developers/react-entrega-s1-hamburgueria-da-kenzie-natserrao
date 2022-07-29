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

  function showProducts(e) {
    e.preventDefault();
    const newFilter = products.filter(
      (product) =>
        product.name.toLowerCase().match(busca) ||
        product.category.toLowerCase().match(busca)
    );
    setFilteredProduct(newFilter);
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
      />
    </div>
  );
}

export default App;
