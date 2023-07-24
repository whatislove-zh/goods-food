import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import Products from "./pages/Products";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import GoodEats from "./pages/GoodEats";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="good-eats" element={<GoodEats />} />
          <Route path="contact" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
