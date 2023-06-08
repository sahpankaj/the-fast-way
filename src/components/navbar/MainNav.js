import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function MainNav() {
  return (
    <AppBar
      position="sticky"
      sx={{
        color: "white",
        backgroundColor: "",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "1px 10px",
        marginBottom: "5px",
      }}
    >
      <Link to={`/`} style={{ textDecoration: "none" }}>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, color: "black", textDecoration: "none" }}
        >
          Shop
        </Typography>
      </Link>
      <Link to={`/cart`} style={{ textDecoration: "none" }}>
        <Button>
          <AiOutlineShoppingCart
            size={20}
            style={{ height: "35px", width: "100px", color: "black" }}
          />
        </Button>
      </Link>
    </AppBar>
  );
}
