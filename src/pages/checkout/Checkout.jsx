import React, { useState, useContext } from "react";
import { CartContext } from "../../context/Context";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";

export const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let order = {
      buyer: userInfo,
      items: cart,
      total: getTotalPrice(),
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "ordenes");

    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((elemento) => {
      updateDoc(doc(db, "productos", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });

    clearCart();
  };

  return (
    <div>
      {orderId ? (
        <div>
          <h2>Gracias por su compra, su órden es {orderId}</h2>
          <Link to="/">Seguir comprando</Link>
        </div>
      ) : (
        <div>
          <h1>Checkout</h1>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", gap: "1rem" }}
          >
            <TextField
              id="nombre"
              name="nombre"
              label="Nombre"
              variant="outlined"
              onChange={handleChange}
              required
            />
            <TextField
              id="apellido"
              name="apellido"
              label="Apellido"
              variant="outlined"
              onChange={handleChange}
              required
            />
            <TextField
              type="email"
              name="email"
              id="email"
              label="Email"
              variant="outlined"
              onChange={handleChange}
              required
            />
            <Button type="submit">Confirmar compra</Button>
          </form>
        </div>
      )}
    </div>
  );
};
