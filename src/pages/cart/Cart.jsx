import {
  Button,
  IconButton,
  Card,
  CardActionArea,
  Typography,
  CardMedia,
  CardActions,
  CardContent,
  Container,
  Box,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { CartContext } from "../../context/Context";
import { numberFormat } from "../../utils/utils";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, eliminar",
      denyButtonText: `No, cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire(
          "Los productos han sido removidos del carrito",
          "",
          "success"
        );
      }
    });
  };

  return (
    <div>
      <h1>Carrito</h1>

      {!cart.length && <p>Tu carrito se encuentra vacío</p>}

      <Container>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            margin: "1rem",
          }}
        >
          {cart.map((product) => (
            <Card
              key={product.id}
              sx={{
                width: 300,
                borderRadius: "5%",
                backgroundColor: "#c1e5e2",
              }}
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
                    {`${product.title} (${product.quantity})`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`Precio: ${numberFormat.format(product.price)}`}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton
                  onClick={() => {
                    Swal.fire({
                      title: `Seguro quieres eliminar "${product.title}" del carrito?`,
                      showDenyButton: true,
                      showCancelButton: false,
                      confirmButtonText: "Si, eliminar",
                      denyButtonText: `No, cancelar`,
                    }).then((result) => {
                      if (result.isConfirmed) {
                        deleteProductById(product.id);
                        Swal.fire(
                          "El producto ha sido eliminado del carrito",
                          "",
                          "success"
                        );
                      }
                    });
                  }}
                >
                  <DeleteForeverIcon color="primary" />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>

      {cart.length > 0 && (
        <>
          <h2>El total a pagar es : {numberFormat.format(total)}</h2>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Link to="/checkout">
              <Button variant="contained">Finalizar compra</Button>
            </Link>

            <Button variant="contained" onClick={clearCartWithAlert}>
              Vaciar Carrito
            </Button>
          </Box>
        </>
      )}
    </div>
  );
};

export default Cart;
