import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/Context";

export const CartWidget = React.forwardRef(() => {
  const { getTotalQuantity } = useContext(CartContext);
  const total = getTotalQuantity();
  return (
    <Link to="/cart">
      <Badge badgeContent={total} color="secondary">
        <ShoppingCartIcon color="white" />
      </Badge>
    </Link>
  );
});
