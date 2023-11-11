import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CounterContainer from "../../components/common/counter/CounterContainer";
import { useState } from "react";
import { numberFormat } from "../../utils/utils";

const ItemDetail = ({ item, onAdd }) => {
  const [contador, setContador] = useState(1);
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
          {numberFormat.format(item.price)}
        </Typography>
      </CardContent>
      <CounterContainer
        stock={item.stock}
        onAdd={onAdd}
        contador={contador}
        setContador={setContador}
      />
      <CardActions>
        <Button variant="outlined" size="small" onClick={() => onAdd(contador)}>
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemDetail;
