import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import { numberFormat } from "../../../utils/utils";

export const ProductCard = ({ product }) => {
  return (
    <Card
      sx={{ maxWidth: 345, borderRadius: "5%", backgroundColor: "#c1e5e2" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.img}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {numberFormat.format(product.price)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/item/${product.id}`}>
          <Button variant="outlined" size="small" color="primary">
            Ver mas
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
