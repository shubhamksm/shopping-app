import React from "react";
import { Header, Banner, Footer } from "./components";
import { ProductProvider } from "./contexts";

function App() {
  return (
    <ProductProvider>
      <Header />
      <div className="h-screen">
        <Banner />
      </div>
      <Footer />
    </ProductProvider>
  );
}

export default App;
