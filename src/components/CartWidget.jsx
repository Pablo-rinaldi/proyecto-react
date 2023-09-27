import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";

export const CartWidget = () => {
  return (
    <Badge badgeContent={4} color="secondary">
      <ShoppingCartIcon color="white" />
    </Badge>
  );
};
