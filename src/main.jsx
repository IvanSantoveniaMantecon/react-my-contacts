import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "tachyons";
import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
