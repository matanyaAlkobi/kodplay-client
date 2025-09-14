import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { ImagePickerPage } from "./pages/ImagePickerPage.tsx";
import Layout from "./components/application-layout/Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/layout" element={<Layout />}>
          <Route path="imagePicker" element={<ImagePickerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
