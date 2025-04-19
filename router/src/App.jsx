import "./App.css";
import Navbar from "./components/navbar";
import NotFound from "./pages/NotFound";

import Home from "./pages/Home";
import About from "./pages/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
