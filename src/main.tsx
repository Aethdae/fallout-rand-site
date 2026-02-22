import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppFO3 from "./AppFO3.tsx";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <AppFO3 />
    <Footer />
  </StrictMode>,
);
