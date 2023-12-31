import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ProductProvider } from "./context/Products";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ProductProvider>
    <App />
  </ProductProvider>
);
