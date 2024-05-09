import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/Routes";
import "./App.css";
import MainContext from "./Context/context";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const router = createBrowserRouter(ROUTES);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((resp) => {
        setData([...resp.data]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  const contextData = {
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
  };
  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  );
}

export default App;
