import React, { useEffect } from "react";
import Header from "./components/Header";
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
      <div className="app">Main App will come here</div>
    </>
  );
}

export default App;
