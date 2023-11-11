import { ProductCard } from "../../components/common/productCard/ProductCard";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/ListItem";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Skeleton from "@mui/material/Skeleton";

export const ItemListContainer = () => {
  const [displayProducts, setDisplayProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "productos");

    let consulta = undefined;

    if (!categoryName) {
      consulta = productsCollection;
    } else {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });

      setDisplayProducts(newArray);
    });
  }, [categoryName]);

  return !displayProducts.length ? (
    <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
      <div>
        <Skeleton variant="rectangular" width={250} height={120} />
        <Skeleton variant="text" width={80} height={40} />
        <Skeleton variant="text" width={150} height={30} />
      </div>
      <div>
        <Skeleton variant="rectangular" width={250} height={120} />
        <Skeleton variant="text" width={80} height={40} />
        <Skeleton variant="text" width={150} height={30} />
      </div>
      <div>
        <Skeleton variant="rectangular" width={250} height={120} />
        <Skeleton variant="text" width={80} height={40} />
        <Skeleton variant="text" width={150} height={30} />
      </div>
      <div>
        <Skeleton variant="rectangular" width={250} height={120} />
        <Skeleton variant="text" width={80} height={40} />
        <Skeleton variant="text" width={150} height={30} />
      </div>
    </div>
  ) : (
    <ItemList displayProducts={displayProducts} />
  );
};
