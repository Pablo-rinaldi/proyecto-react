import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../context/Context";
import { useContext } from "react";
import Swal from "sweetalert2";
import { db } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import Skeleton from "@mui/material/Skeleton";

export function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    let itemCollection = collection(db, "productos");

    let refDoc = doc(itemCollection, id);

    getDoc(refDoc).then((res) => {
      setItem({ id: res.id, ...res.data() });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let obj = {
      ...item,
      quantity: cantidad,
    };

    addToCart(obj);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/cart");
  };

  return !item.id ? (
    <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
      <div>
        <Skeleton variant="rectangular" width={600} height={600} />
        <Skeleton variant="text" width={80} height={40} />
        <Skeleton variant="text" width={150} height={30} />
      </div>
    </div>
  ) : (
    <ItemDetail item={item} onAdd={onAdd} />
  );
}
