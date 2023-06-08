import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductContext";
import ProductCard from "./card/ProductCard";
import FilteredProductCard from "./card/FilteredProductCard";
import Form from "./form/Form";

function ProductListing() {
  const {
    products,
    sortedProducts
  } = useContext(ProductsContext);

  const groupByCategory = () => {
    if (!Array.isArray(products)) {
      return {};
    }

    const groupedProducts = {};

    products.forEach((product) => {
      if (!groupedProducts[product.category]) {
        groupedProducts[product.category] = [];
      }
      groupedProducts[product.category].push(product);
    });

    return groupedProducts;
  };

  const groupedProducts = groupByCategory();
  return (
    <div>
      <Form/>
      
      {!sortedProducts.length > 0 ? (
        <>
          {Object.entries(groupedProducts).map(([category, product]) => (
            <div key={category}>
              <h2 style={{padding:"5px 15px "}}>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
              <ProductCard product={product} />
            </div>
          ))}
        </>
      ) : (
        <>
          {sortedProducts.map((product) => (
            <FilteredProductCard product={product} />
          ))}
        </>
      )}
    </div>
  );
}

export default ProductListing;
