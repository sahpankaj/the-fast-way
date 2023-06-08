import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Alert, Box, Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { BsCurrencyRupee } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { ProductsContext } from "../../context/ProductContext";

const ProductCard = React.memo(({ product }) => {
  const { setCart } = React.useContext(ProductsContext);

  function addToCart(item) {
    setCart((cart) => [...cart, item]);
    alert("Product Added Successfully")
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
      }}
    >
      {product && (
        <Grid
          container
          spacing={{ xs: 0, md: 0 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {product.map((product, index) => {
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
              <Grid
                Item
                xs={12}
                sm={4}
                md={2.4}
                key={id}
                padding={1}
                sx={{
                  boxSizing: "border-box",
                  display: "flex",
                  justifyContent: "center",
                  padding: "5px",
                }}
              >
                <Card
                  sx={{
                    width: 345,
                    height: "400px",
                    boxSizing: "border-box",
                    boxShadow: "2px 2px 5px 4px",
                  }}
                >
                  <CardActionArea sx={{ height: "360px" }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={thumbnail}
                      alt="green iguana"
                    />
                    <CardContent sx={{ padding: "3px" }}>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{}}
                      >
                        {title} | {brand}
                      </Typography>
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
                      <CardContent
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "0px",
                        }}
                      >
                        <Typography variant="body1">
                          <BsCurrencyRupee
                            style={{ height: "20px", width: "15px" }}
                          />{" "}
                          {price}
                        </Typography>
                        <Typography variant="body1">
                          <AiFillStar style={{ color: "gold" }} /> {rating}
                        </Typography>
                      </CardContent>
                      <CardContent
                        sx={{
                          display: "flex",
                          padding: "0px",
                          boxSizing: "border-box",
                        }}
                      >
                        <Typography variant="body1" sx={{ padding: "0px" }}>
                          {description.split(" ").slice(0, 5).join(" ")}
                          {description.split(" ").length > 10 && "..."}
                        </Typography>
                      </CardContent>
                    </CardContent>
                  </CardActionArea>
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
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
});

export default ProductCard;
