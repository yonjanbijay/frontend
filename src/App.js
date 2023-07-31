import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Cart from "./Cart";
import Products from "./Products";
import ErrorPage from "./ErrorPage";
import Login from "./Login";
import About from "./About";
import Footer from "./components/Footer";
import { NoteProvider } from "./context/NoteContext";
function App() {
  return (
    <>
      <NoteProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
          <Footer />
        </Router>
      </NoteProvider>

    </>
  );
}

export default App;
