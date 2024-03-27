import { useEffect, useState } from "react";
import Product from "./Product";
import Navbar from "./nav";

export default function ProductList() {
  const [productList, setProductList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);

  const getProduct = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setProductList(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleSearch = (e, val) => {
    e.preventDefault();
    setSearchInput(val);
    setSelectedCategory(undefined);
  };
  const handleSearchC = (e, category) => {
    e.preventDefault();
    setSelectedCategory(category);
    console.log(category);
  };
  const handleReset = (e) => {
    e.preventDefault();
    setSearchInput("");
    setSelectedCategory(undefined);
  };

  const displayProduct = () => {
    let productsTemp;
    if (searchInput !== (undefined && "")) {
      productsTemp = productList.filter(
        (product) =>
          product.title.includes(searchInput) ||
          product.id.toString().includes(searchInput)
      );
    }
    if (selectedCategory !== (undefined && "all")) {
      productsTemp = productsTemp.filter((product) => {
        return product.category === selectedCategory;
      });
    }
    if (selectedCategory === "all") {
      return productList.map((product, key) => {
        return <Product product={product} key={key} />;
      });
    }

    if (productsTemp.length > 0) {
      return productsTemp.map((product, key) => {
        return <Product product={product} key={key} />;
      });
    }
    return productList.map((product, key) => {
      return <Product product={product} key={key} />;
    });
  };
  return (
    <div>
      <Navbar
        onSearchClick={handleSearch}
        onResetClick={handleReset}
        onSearCateg={handleSearchC}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          gap: "1rem",
          padding: "2rem",
        }}
      >
        {loading ? <p>Loading...</p> : displayProduct()}
      </div>
    </div>
  );
}
