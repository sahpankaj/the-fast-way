import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const ProductsContext = createContext();

function ProductContext({ children }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterBrand, setFilterBrand] = useState("Select Brand");
  const [filterCategory, setFilterCategory] = useState("Select Category");
  const [sortOption, setSortOption] = useState("");
  const [sortedProducts, setSortedProducts] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [products, filterBrand, filterCategory, sortOption]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=100"
      );
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const applyFilters = () => {
    let filtered = products;

    // Apply brand and category filters
    if (filterBrand) {
      filtered = filtered.filter(
        (product) => product.brand.toLowerCase() === filterBrand.toLowerCase()
      );
    }

    if (filterCategory) {
      filtered = filtered.filter(
        (product) =>
          product.category.toLowerCase() === filterCategory.toLowerCase()
      );
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    let sorted = [...filteredProducts]; 
    switch (sortOption) {
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "discount":
        sorted.sort((a, b) => b.discount - a.discount);
        break;
      case "price":
        sorted.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }
    setSortedProducts(sorted);
  }, [filteredProducts, sortOption]);

  const handleBrandFilterChange = (event) => {
    setFilterBrand(event.target.value);
  };

  const handleCategoryFilterChange = (event) => {
    setFilterCategory(event.target.value);
  };

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleClearSorting = () => {
    setSortOption("");
    setFilterBrand("Select Brand")
    setFilterCategory("select Caterogy")

  };
  return (
    <div>
      <ProductsContext.Provider
        value={{
          products,
          filteredProducts,
          filterBrand,
          filterCategory,
          handleBrandFilterChange,
          handleCategoryFilterChange,
          sortOption,
          handleSortOptionChange,
          handleClearSorting,
          sortedProducts,
          cart, setCart
        }}
      >
        {children}
      </ProductsContext.Provider>
    </div>
  );
}

export default ProductContext;
export { ProductsContext };
