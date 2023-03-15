import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Homepage/Home";
import News from "./pages/News";
import Footer from "./pages/Footer/Footer";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
