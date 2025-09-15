import { BrowserRouter, Routes, Route } from "react-router";
import { ImagePickerPage } from "../pages/ImagePickerPage.tsx";
import Layout from "../components/application-layout/Layout.tsx";
import Entry from "../pages/entry.tsx";
import Login from "../pages/login.tsx";

export default function Router() {
  return (
    <BrowserRouter> 
      <Routes>
            <Route path="/" element={<Entry/>}/>
            <Route path="/login" element={<Login/>}/>
        <Route element={<Layout />}>
          <Route path="/" element={<ImagePickerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
