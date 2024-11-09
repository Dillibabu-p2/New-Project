import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UseEffect_Hooks from "./UseEffect_Hooks";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseEffect_Hooks />
  </StrictMode>
);
