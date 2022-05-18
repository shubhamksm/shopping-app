import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import apiClient from "./api";

function App() {
  const getAllData = async () => {
    const resp = await apiClient.get("/banners");
    console.log(resp);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <Header />
      <div className="h-screen">Main App will come here</div>
      <Footer />
    </>
  );
}

export default App;
