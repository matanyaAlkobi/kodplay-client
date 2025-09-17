import { BrowserRouter, Routes, Route } from "react-router";
import { FaceDetection, Layout } from "../components";
import { Entry, Login, Connect, ImagePickerPage } from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/login" element={<Login />} />
        <Route path="/spotify" element={<Connect />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<ImagePickerPage />} />
          <Route path="/face-detection" element={<FaceDetection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
