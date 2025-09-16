import { BrowserRouter, Routes, Route } from "react-router";
import { ImagePickerPage } from "../pages/ImagePickerPage.tsx";
import Layout from "../components/application-layout/Layout.tsx";
import Entry from "../pages/entry.tsx";
import Login from "../pages/login.tsx";
import Connect from "../pages/spotify.tsx";

export default function Router() {
  return (
    <BrowserRouter> 
      <Routes>
            <Route path="/" element={<Entry/>}/>
            <Route path="/login" element={<Login/>}/>
          <Route path="/spotify" element={<Connect/>} />
        <Route element={<Layout />}>
          <Route path="/home" element={<ImagePickerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
