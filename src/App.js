import React from "react";
import { Header, Footer } from "./components";
import { Dashboard, ProductListing } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="product-listing" element={<ProductListing />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
