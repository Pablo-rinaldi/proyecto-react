import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Cart from "./pages/cart/Cart";
import { Checkout } from "./pages/checkout/Checkout";
import { ItemDetailContainer } from "./pages/itemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";
import CartContextComponent from "./context/Context";

function App() {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />

            <Route path="/cart" element={<Cart />} />

            <Route path="/item/:id" element={<ItemDetailContainer />} />

            <Route path="/checkout" element={<Checkout />} />

            <Route path="*" element={<h1>404 Page Not found</h1>} />
          </Route>
        </Routes>
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;
