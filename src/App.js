import React from "react";
import { Header, Footer } from "./components";
import { Dashboard } from "./pages";

function App() {
  return (
    <>
      <Header />
      <div className="app md:px-5 lg:px-10">
        <Dashboard />
      </div>
      <Footer />
    </>
  );
}

export default App;
