import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import Dashboard from "./Dashboard";

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    if (typeof window.Dashboard === "undefined") {
      // Import and initialize the dashboard
      import("./app.js").then(() => {
        new window.Dashboard();
      });
    }
  }, 100);
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Dashboard />
  </StrictMode>
);
