import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { ItemDetailContainer } from "./pages/itemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />

          <Route path="/item/:id" element={<ItemDetailContainer />} />

          <Route path="*" element={<h1>404 Page Not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
