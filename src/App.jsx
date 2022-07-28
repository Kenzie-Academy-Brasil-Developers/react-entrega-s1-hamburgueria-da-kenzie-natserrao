import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import api from "./services/api";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header />
      <ProductsList products={products} />
    </div>
  );
}

export default App;
