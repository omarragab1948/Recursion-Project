import "./index.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { useEffect } from "react";
import Products from "./components/Products/Products";
import { productsData } from "./data/Products";
import { Box } from "@mui/material";

const App = () => {
  useEffect(() => {
    document.title = "Recursion Project";
  }, []);

  return (
    <main className="flex flex-col  p-4">
      <Sidebar />
      <Box>
        <Products products={productsData} />
      </Box>
    </main>
  );
};

export default App;
