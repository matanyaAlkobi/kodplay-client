import { BrowserRouter, Routes, Route } from "react-router";
import { ImagePickerPage } from "../pages/ImagePickerPage.tsx";
import Layout from "../components/application-layout/Layout.tsx";

export default function Router() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ImagePickerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
