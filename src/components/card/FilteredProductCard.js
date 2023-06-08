import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CardActionArea,
} from "@mui/material";
import { BsCurrencyRupee } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { ProductsContext } from "../../context/ProductContext";

export default function FilteredProductCard({ product }) {
  const { setCart } = React.useContext(ProductsContext);

  function addToCart(item) {
    setCart((cart) => [...cart, item]);
  }
  const {
    brand,
    category,
    discountPercentage,
    id,
    price,
    rating,
    stock,
    thumbnail,
    title,
    description,
  } = product;
  return (
    <Box sx={{ display: "flex", margin: "20px" }}>
      <Card
        sx={{
          width: {
            xs: "100%",
            sm: "80%",
            md: "50%",
            boxShadow: "2px 2px 5px 4px",
          },
        }}
      >
        <CardActionArea
          sx={{ display: { xs: "block", sm: "flex", md: "flex" }, }}
        >
          <CardMedia
            component="img"
            height="200"
            image={thumbnail}
            alt="green iguana"
          />
          <CardContent sx={{  width: "100%", padding:"0px",marginLeft:{xs:"0px", md:"20px"}}}>
            <Typography gutterBottom variant="h6" component="div" sx={{}}>
              {title} | {brand}
            </Typography>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "red",
                  padding: "2px",
                  margin: "0px 0px 2px",
                }}
              >
                {discountPercentage} %
              </Button>
              <Button
                variant="text"
                sx={{
                  color: "black",
                  padding: "2px",
                  margin: "0px 0px 2px",
                  textTransform: "capitalize",
                }}
              >
                {stock} left
              </Button>
            </CardContent>

            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0px",
              }}
            >
              <Typography variant="body1">
                <BsCurrencyRupee style={{ height: "20px", width: "15px" }} />{" "}
                {price}
              </Typography>
              <Typography variant="body1">
                <AiFillStar style={{ color: "gold" }} /> {rating}
              </Typography>
            </CardContent>
            <CardContent
              sx={{ display: "flex", padding: "0px", boxSizing: "border-box" }}
            >
              <Typography variant="body1" sx={{ padding: "0px" }}>
                {description}
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              onClick={() => addToCart(product)}
              sx={{
                color: "black",
                fontWeight: "bold",
                width: "100%",
                borderRadius: "none",
                backgroundColor: "282c34",
              }}
            >
              Add to cart
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
