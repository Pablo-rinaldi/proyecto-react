import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import React from "react";

export const CartWidget = React.forwardRef(() => {
  return (
    <Badge badgeContent={4} color="secondary">
      <ShoppingCartIcon color="white" />
    </Badge>
  );
});
