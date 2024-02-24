import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DarkMmodeProvider } from "./ContextApi.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkMmodeProvider>
      <App />
    </DarkMmodeProvider>
  </React.StrictMode>
);
