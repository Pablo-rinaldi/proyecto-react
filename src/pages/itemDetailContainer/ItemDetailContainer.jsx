import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    new Promise((resolve) => {
      resolve(() => {
        return products.find((product) => {
          return +id === product.id;
        });
      });
    })
      .then((item) => setItem(item))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Card sx={{ width: "100%", backgroundColor: "#c1e5e2" }}>
      <CardMedia component="img" alt={item.title} image={item.img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`$${item.price}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Agregar al carrito</Button>
      </CardActions>
    </Card>
  );
}
