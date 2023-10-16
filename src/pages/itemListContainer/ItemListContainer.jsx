import { ProductCard } from "../../components/common/productCard/ProductCard";
import { products } from "../../productsMock";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/ListItem";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const ItemListContainer = () => {
  const [displayProducts, setDisplayProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      return product.category === categoryName;
    });

    new Promise((resolve) => {
      resolve(categoryName ? filteredProducts : products);
    })
      .then((items) => setDisplayProducts(items))
      .catch((err) => console.log(err));
  }, [categoryName]);

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
