import {React, useState} from "react"
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Homepage/Home";
import Footer from "./pages/Footer/Footer";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import Contacts from "./pages/Contacts/Contacts";
import BlogDetails from "./pages/Blog/BlogDetails";
import BlogList from "./pages/Blog/BlogList";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/blogDetails/:id" element={<BlogDetails />} />
          <Route path="/blogList" element={<BlogList />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
