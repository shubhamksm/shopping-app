import React from "react";
import { Header, Footer } from "./components";
import { Dashboard } from "./pages";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Dashboard />
      </div>
      <Footer />
    </>
  );
}

export default App;
