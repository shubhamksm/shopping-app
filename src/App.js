import React, { useEffect, useState } from "react";
import apiClient from "./api";

function App() {
  const [data, setData] = useState(null);

  const getAllData = async () => {
    const resp = await apiClient.get("/banners");
    console.log(resp);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
