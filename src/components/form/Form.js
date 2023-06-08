import React, { useContext } from 'react'
import { ProductsContext } from "../../context/ProductContext";
import { Box, Button,  Typography } from '@mui/material';
function Form() {
    const {
        products,
        filterBrand,
        filterCategory,
        handleBrandFilterChange,
        handleCategoryFilterChange,
        sortOption,
        handleSortOptionChange,
        handleClearSorting,
        sortedProducts
      } = useContext(ProductsContext);
    
      const brands = [...new Set(products.map((product) => product.brand))];
      const categories = [...new Set(products.map((product) => product.category))];
  return (
    <Box sx={{display:"flex", justifyContent:"space-between"}} className="formCont">
    <Box sx={{display:"flex", display:"flex", flexWrap:"wrap"}}>
    <Box  sx={{display:"flex", display:"flex", flexWrap:"wrap",alignItems:"flex-end"}}>
        <Typography sx={{fontWeight:"600"}}>Filter By</Typography>
    </Box>
    <label> 
        Brand:
        <select value={filterBrand} onChange={handleBrandFilterChange}>
          <option value="0">Select Brand</option>
          <option value="">All</option>
          {brands.map((brand) => (
            <option value={brand} key={brand}>
              {brand}
            </option>
          ))}
        </select>
      </label>
      <label>
        Category:
        <select value={filterCategory} onChange={handleCategoryFilterChange}>
          <option value="0">Select Category</option>
          <option value="">All</option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    </Box>
    <Box sx={{display:"flex", display:"flex", flexWrap:"wrap"}}>
      <label>
        Sort By:
        <select value={sortOption} onChange={handleSortOptionChange}>
          <option value="">None</option>
          <option value="rating">Rating</option>
          <option value="discount">Discount</option>
          <option value="price">Price</option>
        </select>
      </label>
      <Button onClick={handleClearSorting} variant="contained" sx={{padding:"0px 20px",backgroundColor:"red", marginLeft:"10px"}}>Clear</Button>
    </Box>
    </Box>
  )
}

export default Form
