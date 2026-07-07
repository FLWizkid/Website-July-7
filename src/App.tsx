import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Healthcare from "./pages/Healthcare";
import Academic from "./pages/Academic";
import ROI from "./pages/ROI";
import Team from "./pages/Team";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/solutions/healthcare" element={<Healthcare />} />
        <Route path="/solutions/academic" element={<Academic />} />
        <Route path="/roi" element={<ROI />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
