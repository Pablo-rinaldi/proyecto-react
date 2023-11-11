import { Grid } from "@mui/material";
import Item from "@mui/material/ListItem";
import { ProductCard } from "../../components/common/productCard/ProductCard";

const ItemList = ({ displayProducts }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {displayProducts.map((product) => {
        return (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Item>
              <ProductCard key={product.id} product={product} />
            </Item>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ItemList;
